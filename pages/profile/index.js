import NavBar from "../../components/common/NavBar";
import About from "../../components/about/About";
import Medic from "../../components/common/icons/Medic";
import Doctor from "../../components/common/icons/Doctor";
import styles from "../../styles/Home.module.css";
import Information from "../../components/about/Information";
import Choose from "../../components/about/Choose";
import { toast, ToastContainer } from "react-toastify";
import AuthContext from "../../store/auth-context";
import { ClassicSpinner } from "react-spinners-kit";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import DropFiles from "../../components/common/DropFiles";
import ReactImageGallery from "react-image-gallery";
import Request from "../../components/ambulance/AmbulanceReq/Request";
import axios from "axios";
import GenericModal from "../../components/common/GenericModal";
import AppRequest from "../../components/appointments/AppointmentReq";
const Index = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx.token, ctx.id);
  const [profile, setProfile] = useState(true);
  const [Payment, setPayment] = useState(false);
  const [app, setApp] = useState(false);
  const [amb, setAmb] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profileDetails, setProfileDetails] = useState();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [image, setImage] = useState("");
  const [ambReq, setAmbReq] = useState("");
  const [imageArray, setImageArray] = useState([]);
  const [ambModal, setAmbModal] = useState(false);
  const [appReq, setAppReq] = useState(false);
  const[appModal,setAppModal]=useState(false);

  const openHandler = () => {
    setAmbModal(true);
  };
  const closeHandler = () => {
    setAmbModal(false);
  };
  const openAppHandler=()=>{
    setAppModal(true)
  }
  const closeAppHandler=()=>{
    setAppModal(false)
  }
  console.log("ID", ctx.id);
  const fetchProfile = async () => {
    try {
      const result = await axios.get(
        `https://hm-project-finalbackend.herokuapp.com/api/patient/${ctx.id}`
      );
      setProfileDetails(result.data.user);
      console.log(result.data.user);
      setName(result.data.user.name);
      setContact(result.data.user.contact);
      setImage(result.data.user.image);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchAmbulance = async () => {
    try {
      const result = await axios.get(
        `https://hm-project-finalbackend.herokuapp.com/api/request/${ctx.id}`
      );
      setAmbReq(result.data.requests);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchAppointments = async () => {
    try {
      const result = await axios.get(
        `https://hm-project-finalbackend.herokuapp.com/api/appointments/patient-appointment-list/${ctx.id}`
      );
      setAppReq(result.data.appointments);
    } catch (err) {
      console.log(err);
    }
  };
  const upload = (accepted, rejected) => {
    setImageArray([...imageArray, ...accepted]);
  };
  useEffect(() => {
    if (imageArray.length > 0) {
      const url = URL.createObjectURL(imageArray[imageArray.length - 1]);
      setImage(url);
    }
  }, [imageArray]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await axios
      .patch(`https://hm-project-finalbackend.herokuapp.com/api/patient/${ctx.id}`, {
        name: name,
        contact: contact,
        image: image,
      })
      .then(() => {
        handleClose();
        toast.success("Update Successful !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
    setIsLoading(true);
    fetchProfile().then(() => {
      setIsLoading(false);
    });
  };
  useEffect(() => {
    if (profile) {
      setIsLoading(true);
      fetchProfile().then(() => {
        setIsLoading(false);
      });
    }
  }, [ctx.id, profile]);
  useEffect(() => {
    if (profile) {
      setIsLoading(true);
      fetchAppointments().then(() => {
        setIsLoading(false);
      });
    }
  }, [ctx.id, app]);
  useEffect(() => {
    if (amb) {
      setIsLoading(true);
      fetchAmbulance().then(() => {
        setIsLoading(false);
        console.log(ambReq);
      });
    }
  }, [ctx.id, amb]);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <NavBar></NavBar>
      <div className={`h-[600px] flex ${styles.profile} bg-opacity-30`}>
        <div className="flex flex-col mt-[0%] ml-[10%] justify-center   ">
          <div className="font-Heading text-lg text-tertiaryblue-50 font-semibold">
            Profile
          </div>
          <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
            <span>Set Up Your Profile</span>
          </div>
          <div className="flex w-[60%] flex-wrap mt-8 font-Heading text-lg text-tertiarywhite-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          showModal ? "h-[0vh] overflow-hidden" : "flex items-center flex-col"
        }
      >
        {!ambModal && (
          <div className="bg-tertiarywhite-50  my-10 rounded-md w-[80%] shadow-md">
            <div className=" flex justify-evenly pb-0  text-2xl font-Heading font-semibold cursor-pointer transition-all">
              <span
                className={
                  profile ? "border-b-4 border-tertiaryblue-50 py-3" : "py-3"
                }
                onClick={() => {
                  setProfile(true);
                  setPayment(false);
                  setAmb(false);
                  setApp(false);
                }}
              >
                Profile Summary
              </span>
              <span
                className={
                  Payment ? "border-b-4 border-tertiaryblue-50 py-3" : "py-3"
                }
                onClick={() => {
                  setProfile(false);
                  setPayment(true);
                  setAmb(false);
                  setApp(false);
                }}
              >
                Payment
              </span>
              <span
                className={
                  app ? "border-b-4 border-tertiaryblue-50 py-3" : "py-3"
                }
                onClick={() => {
                  setProfile(false);
                  setPayment(false);
                  setAmb(false);
                  setApp(true);
                }}
              >
                {" "}
                Appointments
              </span>
              <span
                className={
                  amb ? "border-b-4 border-tertiaryblue-50 py-3" : "py-3"
                }
                onClick={() => {
                  setProfile(false);
                  setPayment(false);
                  setAmb(true);
                  setApp(false);
                }}
              >
                Ambulance Status
              </span>
            </div>
          </div>
        )}
        {isLoading && (
          <div className="flex justify-center w-full h-full">
            <ClassicSpinner size="30" color="#165FCC"></ClassicSpinner>
          </div>
        )}
        {!isLoading && profile && profileDetails && (
          <div className="bg-tertiarywhite-50 py-10 px-10 w-[80%] rounded-md shadow-md flex flex-col items-center my-5">
            <img
              src={
                image == ""
                  ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEXk5ueutLersbTn6eqor7Lp6+y2u77h4+TIzM7N0dLR1NbU19mxt7q/xMbZ3N3c3+C6v8HCx8mJwGV6AAAFVUlEQVR4nO2d2XbjIAxAARmMd/v/f3YgSVs7kzY2CCMc3Zc50yffI7GDIgTDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMBcEQIt67NqmabtxEqAh9xdhAiBGO8vKoRy3f83S+b9fAYC6MapS8gknauxUviRAa/63+7E0jdC5vzEGEFZWv+k9JOVSF+sIYNWv4Vs5qkWUmau6kzv87o5NgWEEMG/yc03VF5equjvgd3MsLIywHBR0inPujz4ACLOzBa5RfV1KhwN1HyDoHacyFKEO0vNUYxGKdVgAC1I83MdsFOknKkRE0KPq3AZv0CZO0JFb4W/0EhlCF8SZcp5CG9UI71SWsGJMN7pSnHJ7/IqeUQylpDpFRclRj1qIKgKSoMvT3Cqv0QNSjjoMzSCihdDP3nLLvEDPeII0g1gjhtB1NvSCiNkKPTO9IOIKutVwbqEnoME2pDYmIqwpnsmt9MSEHEI3YHS5nTaARTdUA6klBuAnKbE0xVk2baG1iOoSGKqGUJpC/ObFCygN+kmaoZSEYog9oblTEdpYnFBn3d+GhEbEo4eF+1B0Nt0SjPc3w4FMV5OmK6W0DAbU5f0PPR3DNIOFVGQMdZ/GsKLT01zfMI0gG57IB2Tp9Q0vP1qkGvHpnCMC8n73F4RmbWlm3pLOzPv6q6dUK2BK50+X38VIM1woOkn6AbuJaXaECXU0n7Crf/2Tmeufrl3/hPQDTrkT3FSglaTi+rdNhB5wDemsnL7BvvVFLkmRb+7R2dBfgRlEUgunbz7gBi3eFVpKK8M10Fz9JjvexIaqINqLEpLdzB2UFxe0Vr7PIPSntF92+UOaaMXcCm+JfWFJ/xFp3NSmhIfAEKNYgqBTDN/RKEPw9iA/sOJAIYLBVSNkMVUjhD8zPdwY1VxWHR59dHZD+n3zS1ymHqrAQ38Y/B8Xxr1VlCpLdzXxF6CXPY6qGsqt2qbF8q7al1JDcSWiNmjR9L9Lqqq3ZVek84Ce7Muqgkr1y1hufm4AqLvFyEdhyFtpSGmWtr6I3gNnU09d29hbec/a/f9SeiuuKgagQW+5iKo386VnGzvMxvSPe6h9b+Zhse04uaZYrKn/8qmzg3mUnn0xEPoeR/Xz0tyaZe4PPoKXG5uhdwZ7pm3eVM62qwupLQxadNYFbk/l0u3gr/qhmahb6tvoflRuFU1n2QmykhrGQQbbrSxNUxOUdHOzQWGdrrnpagu0pqtaWDS9L0kzkgkkwDjvXeseoZKWxNYUiPZdQetg3No4e0lz/b5gd6Rj3mR1S/jAvd8DVKbL1ensLEiO4ThmcdTNOX43x/n8vRw9ps/PjeNybpcD4viufSRKndkcdXtegv5QnXawAWI+O4B3lGpPCaPucgTwTjWcEMaAivmIKJl64AguKI9G4t9Q0GNmP6+Y8jmUxrp8GIVKV11JZ22CK1SiVVXA2Xwq0lzaAKxS1hikUCQl6BQ7bEVigvjXp9CqreOB+0sY2EWCUcC80K8tmV50Dd5bb0hTMiGeHksR980WIlgl61LV10GgQilxSrKX+QLjHSbZRnjHIASRcAQlxvMTgkP9lujKCyPpHPVEPlXUub//PVXUHBztRWFKomqe6QIEo+p+p6rhhUzE/FQXIRgRRPRaF8kINUxVWhYd1QYqEtj+3UngmEh6yr0l9Icvc3/3fsJmp5CiQlkqgpYYBSVpaJrm/uojBA2JaepZJiLkET+0BSWpDHnFn6pybiICtocJ77C9IqR+XVEhDBkRi+poHMerLNLfoNlyfMzH+m3f0zhqCPbxVrAU6NTgZxiGYRiGYRiGYRiGYT6Uf/VaUTW8zb4SAAAAAElFTkSuQmCC"
                  : image
              }
              className="rounded-full my-10 h-56 w-56"
            ></img>
            <div className="w-[80%] flex justify-between items-center text-lg mt-5">
              <span className="text-tertiaryblue-50">Patient Name :</span>
              <span>{profileDetails?.name}</span>
            </div>
            <div className="w-[80%] flex justify-between items-center text-lg mt-5">
              <span className="text-tertiaryblue-50">Email :</span>
              <span>{profileDetails?.email}</span>
            </div>
            <div className="w-[80%] flex justify-between items-center text-lg mt-5">
              <span className="text-tertiaryblue-50">Contact :</span>
              <span>{profileDetails?.contact}</span>
            </div>
            <div>
              <button
                className="bg-tertiaryblue-50 text-tertiarywhite-100 my-10 px-10 py-2 rounded-md font-display "
                onClick={() => setShowModal(true)}
              >
                UPDATE PROFILE
              </button>
            </div>
            {showModal && (
              <GenericModal
                title="Profile"
                posText="Save"
                negText="Cancel"
                closeHandler={handleClose}
                negHandler={handleClose}
                posHandler={submitHandler}
              >
                <form
                  className="flex flex-col px-10 "
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label className="my-2 font-display text-sm " htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    className="w-[40%] py-1  rounded-md px-1 border-2 border-blackShade-50 mb-3 bg-tertiaryblue-60"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  <label
                    className="my-2 font-display text-sm "
                    htmlFor="mobile"
                  >
                    Contact
                  </label>
                  <input
                    id="mobile"
                    className="w-[40%] py-1 mb-4 rounded-md px-1 border-2 border-blackShade-50 bg-tertiaryblue-60"
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  ></input>
                  <div className="mb-10">
                    <DropFiles
                      msg="Drag and drop or click to add Photo here"
                      num={1}
                      upload={upload}
                    ></DropFiles>
                  </div>
                  {imageArray.length > 0 && (
                    <ReactImageGallery
                      disableKeyDown={true}
                      showPlayButton={false}
                      showFullscreenButton={true}
                      showBullets={false}
                      showThumbnails={true}
                      autoPlay={false}
                      lazyLoad={true}
                      items={imageArray.map((file) => {
                        const url = URL.createObjectURL(file);
                        return {
                          original: url,
                          thumbnail: url,
                        };
                      })}
                    ></ReactImageGallery>
                  )}
                </form>
              </GenericModal>
            )}
          </div>
        )}
        {amb && (
          <div
            className={
              !ambModal
                ? "my-5 w-[80%] flex justify-center flex-col items-center"
                : "h-[0vh] overflow-hidden"
            }
          >
            <div className="w-[100%] justify-evenly text-xl my-4 py-5 rounded-md font-semibold text-blackShade-50 bg-tertiarywhite-50  flex shadow-md">
              <div className="w-[20%] text-center">Patient Name</div>
              <div className="w-[25%] text-center">Contact</div>
              <div className="w-[35%] text-left">Emergency</div>
              <div className="w-[10%] text-center ">Status</div>
            </div>
            {ambReq &&
              ambReq.map((amb,i) => (
                <Request
                  {...amb}
                   key={i}
                  openHandler={openHandler}
                  closeHandler={closeHandler}
                ></Request>
              ))}
          </div>
        )}
        {app && (
          <div
            className={
              !appModal
                ? "my-5 w-[80%] flex justify-center flex-col items-center"
                : "h-[0vh] overflow-hidden"
            }
          >
            <div className="w-[100%] justify-evenly text-xl my-4 py-5 rounded-md font-semibold text-blackShade-50 bg-tertiarywhite-50  flex shadow-md">
              <div className="w-[15%] text-center">Date</div>
              <div className="w-[15%] text-center">Start Time</div>
              <div className="w-[15%] text-center">Mode</div>
              <div className="w-[10%] text-center ">Status</div>
              <div className="w-[15%] text-center ">Disease Category</div>
            </div>
            {appReq &&
              appReq.map((app,i) => (
                <AppRequest {...app}   openHandler={openAppHandler} key={i}
                closeHandler={closeAppHandler}></AppRequest>
              
              ))}
          </div>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
};
export default Index;
