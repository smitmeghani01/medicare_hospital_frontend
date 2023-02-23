import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import AuthContext from "../../store/auth-context";
import axios from "axios";
const Form = (props) => {
  const authCtx = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Patient");
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [nameIsValid, setNameIsValid] = useState(false);
  const [passwordIsValid, setPaswordIsValid] = useState(false);
  const [emailIsBlur, setEmailIsBlur] = useState(false);
  const [nameIsBlur, setNameIsBlur] = useState(false);
  const [passwordIsBlur, setPaswordIsBlur] = useState(false);
  const router = useRouter();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const userTypeChangeHandler = (event) => {
    setUserType(event.target.value);
  };

  useEffect(() => {
    if (passwordIsBlur || nameIsBlur || emailIsBlur) {
      if (password.length >= 7) setPaswordIsValid(true);
      else setPaswordIsValid(false);

      if (name.length > 0) setNameIsValid(true);
      else setNameIsValid(false);

      if (email.length > 0 && email.includes("@")) setEmailIsValid(true);
      else setEmailIsValid(false);
    }
  }, [
    name,
    email,
    password,
    nameIsBlur,
    passwordIsBlur,
    emailIsBlur,
    userType,
  ]);

  const submitHandler = async (event) => {
    let FormisValid = nameIsValid && emailIsValid && passwordIsValid;
    event.preventDefault();
    let API_KEY = "AIzaSyCqx5Fmv21exf5UNsEriBwFlfBA7maM3K4";
    if (props.isLogin) {
      try {
        const result = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (result.ok) {
          const data = await result.json();
          console.log("ho")
          const userData = await axios.get(
            `https://hm-project-finalbackend.herokuapp.com/api/user-type/${email}`
          );
          authCtx.onSetUserType(userData?.data?.userData?.user_type);
          if (userData?.data?.userData?.user_type === "Doctor") {
            router.push("/doctor");
            const doctorData = await axios.post(
              `https://hm-project-finalbackend.herokuapp.com/api/doctors/login`,
              {
                token: data.idToken,
                name: name,
                email: email,
                password: password,
              }
            );
            authCtx.onLogin(
              data.idToken,
              data.refreshToken,
              new Date(
                new Date().getTime() + parseInt(data.expiresIn) * 1000
              ).getTime(),
              doctorData?.data?.doctor?.id
            );
          } else {
            const patientData = await axios.post(
              `https://hm-project-finalbackend.herokuapp.com/api/patient/login`,
              {
                token: data.idToken,
                name: name,
                email: email,
                password: password,
              }
            );
            authCtx.onLogin(
              data.idToken,
              data.refreshToken,
              new Date(
                new Date().getTime() + parseInt(data.expiresIn) * 1000
              ).getTime(),
              patientData?.data?.user?.id
            );
            router.push("/patient");
          }
        } else {
          toast.error("Authentication Failed !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log(userType);
      try {
        const result = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
          }
        );
        if (result.ok) {
          const data = await result.json();
          const user = {
            username: name,
            email: email,
            user_type: userType,
          };

          if (userType === "Doctor") {
            const doctorData = await axios.post(
              `https://hm-project-finalbackend.herokuapp.com/api/doctors/signup`,
              {
                token: data.idToken,
                name: name,
                email: email,
                password: password,
                image:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
                education:["P.H.D MBBS from AIIMS Delhi","Several Awards in Skin Domain"],
                des: "Specialized dermatologist for various types of skin diseases.Dermatologists are medical doctors who specialize in skin, hair and nails. Dermatologists also handle cosmetic disorders, like hair loss and scars. Your dermatologist will examine you, order lab tests, make a diagnosis and treat your condition with medication or a procedure",
                age: 50,
                expertise: "Heart",
                fees: 5000,
                rating:4
              }
            );
            authCtx.onLogin(
              data.idToken,
              data.refreshToken,
              new Date(
                new Date().getTime() + parseInt(data.expiresIn) * 1000
              ).getTime(),
              doctorData?.data?.doctor?.id
            );
            user.doctorID = doctorData?.data?.user?.id;
            router.push("/doctor");
          } else {
            const patientData = await axios.post(
              `https://hm-project-finalbackend.herokuapp.com/api/patient/signup`,
              {
                token: data.idToken,
                name: name,
                email: email,
                password: password,
              }
            );
            authCtx.onLogin(
              data.idToken,
              data.refreshToken,
              new Date(
                new Date().getTime() + parseInt(data.expiresIn) * 1000
              ).getTime(),
              patientData?.data?.user?.id
            );
            user.patientID = patientData?.data?.user?.id;
            router.push("/patient");
          }
          authCtx.onSetUserType(userType);

          const userData = axios.post("https://hm-project-finalbackend.herokuapp.com/api/user-type", {
            user: user,
          });
        } else
          toast.error("Authentication Failed !", {
            position: toast.POSITION.BOTTOM_RIGHT,
          });
      } catch (err) {
        console.log(err);
      }
    }
    if (FormisValid) {
      console.log(email, name, password);
      setEmail("");
      setPassword("");
      setName("");
      setUserType("Patient");
      setNameIsBlur(false);
      setEmailIsBlur(false);
      setPaswordIsBlur(false);
      setNameIsValid(false);
      setPaswordIsValid(false);
      setEmailIsValid(false);
    }
  };
  return (
    <>
      <div>
        <form
          className="flex flex-col w-[90%] rounded-t-2xl"
          onSubmit={submitHandler}
        >
          {!props.isLogin && (
            <>
              <label htmlFor="name" className="text-slate-800 font-semibold">
                Full Name<span className="mx-1 text-red-600">*</span>
              </label>
              <input
                id="name"
                name="name"
                className="my-3 mb-1 border border-slate-800 rounded-md bg-slate-100 px-2 py-1"
                type="text"
                placeholder="Enter full name"
                value={name}
                onChange={nameHandler}
                onBlur={() => setNameIsBlur(true)}
              ></input>
            </>
          )}
          {!nameIsValid && nameIsBlur && !props.isLogin && (
            <p className="text-red-600 text-sm mb-1 ">
              Cannot leave feild empty
            </p>
          )}
          <label htmlFor="email" className="text-slate-800 font-semibold">
            Email<span className="mx-1 text-red-600">*</span>
          </label>
          <input
            id="email"
            name="email"
            className="my-3 border border-slate-800 rounded-md bg-slate-100 px-2 py-1"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={emailHandler}
            onBlur={() => setEmailIsBlur(true)}
          ></input>
          {!emailIsValid && emailIsBlur && (
            <p className="text-red-600 text-sm mb-1 ">Include an @ in email</p>
          )}
          <label htmlFor="password" className="text-slate-800 font-semibold">
            Password<span className="mx-1 text-red-600">*</span>
          </label>
          <input
            id="password"
            name="password"
            className="my-3 border border-slate-800 rounded-md bg-slate-100 px-2 py-1"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={passwordHandler}
            onBlur={() => setPaswordIsBlur(true)}
          ></input>
          {!passwordIsValid && passwordIsBlur && (
            <p className="text-red-600 text-sm mb-1 ">
              Minimum 7 characters needed
            </p>
          )}
          {!props?.isLogin && (
            <div className="flex flex-col space-y-2">
              <div className="flex">
                <h2 className="text-slate-800 font-semibold">Sign up as:</h2>
                <span className="mx-1 text-red-600">*</span>
              </div>
              <div className="flex space-x-3">
                <div className="flex space-x-2">
                  <input
                    type="radio"
                    onClick={userTypeChangeHandler}
                    value="Patient"
                    id="user_type_patient"
                    name="user_type"
                    checked={userType === "Patient"}
                  />
                  <label
                    className="text-slate-800 font-semibold"
                    htmlFor="user_type_patient"
                  >
                    Patient
                  </label>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="radio"
                    value="Doctor"
                    onClick={userTypeChangeHandler}
                    id="user_type_doctor"
                    name="user_type"
                    checked={userType === "Doctor"}
                  />
                  <label
                    className="text-slate-800 font-semibold"
                    htmlFor="user_type_doctor"
                  >
                    Doctor
                  </label>
                </div>
              </div>
            </div>
          )}
          <button
            type="submit"
            className={
              !props.isLogin
                ? nameIsValid && emailIsValid && passwordIsValid
                  ? "rounded-3xl bg-blue-500 text-white py-[4px] px-2 mt-3 w-[70%] ml-12"
                  : "rounded-3xl bg-slate-300 text-white py-[4px] px-2 mt-3 w-[70%] ml-12"
                : emailIsValid && passwordIsValid
                ? "rounded-3xl bg-blue-500 text-white py-[4px] px-2 mt-3 w-[70%] ml-12"
                : "rounded-3xl bg-slate-300 text-white py-[4px] px-2 mt-3 w-[70%] ml-12"
            }
            disabled={
              !props.isLogin
                ? !(nameIsValid && emailIsValid && passwordIsValid)
                : !(emailIsValid && passwordIsValid)
            }
          >
            {props.isLogin ? "Sign-In" : "Register"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
};
export default Form;
