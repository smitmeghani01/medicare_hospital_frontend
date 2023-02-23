import NavBar from "../../components/common/NavBar";
import styles from "../../styles/Home.module.css";
import GenericModal from "../../components/common/GenericModal";
import MyMapComponent from "../../components/common/Map";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import {toast,ToastContainer} from "react-toastify"
import { useContext } from "react";
import { useRouter } from "next/router";
const Index = () => {
  const [name, setName] = useState("");
  const [emergency, setEmergency] = useState("");
  const [contact, setContact] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [locate, setLocate] = useState(false);
  const [status,setCheckStatus]=useState(false)
  const ctx=useContext(AuthContext)
  const router=useRouter()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);
  console.log(ctx.id,"amb")
  const requestHandler = async () => {
    try {
     const result= await axios.post("https://hm-project-finalbackend.herokuapp.com/api/request", {
        status: "Pending",
        patient:ctx.id,
      
        ambulance: {
          location: {
            lat: latitude,
            lng: longitude,
          },
          emergency:{
            details:emergency,
            contact:contact
          },
          name:name
        },
      }).then(()=>{
        setName("")
        setEmergency("")
        setContact("")
        setCheckStatus(false)
        toast.success("Request Successful !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });

      });
      closeHandler();
      console.log('amb',result.data)
      
    } catch (err) {
      console.log(err);
    }
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emergencyHandler = (e) => {
    setEmergency(e.target.value);
  };
  const contactHandler = (e) => {
    setContact(e.target.value);
  };
  const closeHandler = () => {
    setShowModal(false);
  };
  return (
    <>
      <NavBar></NavBar>
      <div className={`h-[600px] flex ${styles.amb} bg-opacity-30`}>
        <div className="flex flex-col mt-[8%] ml-[10%] justify-center   ">
          <div className="font-Heading text-lg text-tertiaryblue-50 font-semibold">
            Ambulance
          </div>
          <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
            <span>We are here For Any Emergency</span>
          </div>
          <div className="flex w-[60%] flex-wrap mt-8 font-Heading text-lg ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
        </div>
      </div>
      <div
        className={showModal ? "h-[0vh] overflow-hidden" : "flex items-center"}
      >
        <div className=" ml-[10%] my-10 flex flex-col w-[50%] ">
          <h1 className="my-5 text-4xl font-display font-extrabold">
            Book An Ambulance
          </h1>
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <label
              className="text-xl text-tertiaryblue-50 my-2 "
              htmlFor="name"
            >
              Patient name
            </label>
            <input
              id="name"
              className=" w-[50%] border border-navyblue-900 rounded-sm py-2 px-2 text-blackShade-50"
              placeholder="Patient name(Mandatory)"
              value={name}
              onChange={nameHandler}
            ></input>
            <label
              className="text-xl text-tertiaryblue-50 my-2 "
              htmlFor="name"
            >
              Contact
            </label>
            <input
              id="contact"
              className=" w-[50%] border border-navyblue-900 rounded-sm py-2 px-2 text-blackShade-50"
              placeholder="Contact(Mandatory)"
              value={contact}
              onChange={contactHandler}
            ></input>
            <label
              className="text-xl text-tertiaryblue-50 my-2 mt-5 "
              htmlFor="emergency"
            >
              Emergency Details
            </label>
            <textarea
              rows={6}
              id="emergency"
              className="w-[80%] border border-navyblue-900 rounded-sm py-2 px-2 text-blackShade-50"
              placeholder="Specify Emergency(Optional)"
              value={emergency}
              onChange={emergencyHandler}
            ></textarea>
            <div className="flex w-full space-x-5">
            <button
              className={
                name != "" && contact != ""
                  ? "text-tertiarywhite-50 bg-tertiaryblue-50 px-10 py-3 my-5 font-semibold w-[30%] rounded-md"
                  : "text-tertiarywhite-50 bg-tertiarygrey-500 px-10 py-3 my-5 font-semibold w-[30%] rounded-md"
              }
              onClick={() => setShowModal(true)}
              disabled={name == "" || contact == ""}
            >
              BOOK NOW
            </button>
            <button
              className={
            
                  "text-tertiarywhite-50 bg-tertiaryViolet px-10 py-3 my-5 font-semibold w-[30%] rounded-md"
                 
              }
              onClick={() => router.push('/profile')}
            
            >
              CHECK STATUS
            </button>
            </div>
          </form>
        </div>
        <div class="mapouter w-[30%] ">
          <div class="gmap_canvas">
            <iframe
              class="gmap_iframe"
              width="100%"
              height={"400px"}
              frameborder="0"
              scrolling="yes"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Criticare Hospital Andheri&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://formatjson.org/"></a>
          </div>
        </div>
      </div>
      {showModal && (
        <GenericModal
          title="Call Ambulance"
          posText="Book"
          negText="Cancel"
          closeHandler={closeHandler}
          negHandler={closeHandler}
          posHandler={requestHandler}
        >
          <div className={"px-10 font-display"}>
            <h1 className="my-1 text-2xl font-display font-extrabold">
              Patient Details
            </h1>
            <div className="w-[80%] flex justify-between items-center text-lg mt-3">
              <span className="text-tertiaryblue-50">Patient Name :</span>
              <span>{name}</span>
            </div>
            <div className="w-[80%] flex justify-between items-center text-lg mt-3">
              <span className="text-tertiaryblue-50">Emergency details :</span>
              <span>{emergency == "" ? "NA" : emergency}</span>
            </div>
            <div className="w-[80%] flex justify-between items-center text-lg mt-3">
              <span className="text-tertiaryblue-50">Mobile no:</span>
              <span>{contact}</span>
            </div>
            <button
              className="text-tertiarywhite-100  font-Heading text-lg px-5 py-2 my-10 rounded-md flex items-center space-x-3 bg-tertiaryViolet "
              onClick={() => setLocate(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width={20}
                height={20}
              >
                <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
              </svg>
              <p>Locate Me</p>
            </button>
            {locate && (
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                lat={latitude}
                lng={longitude}
              />
            )}
          </div>
        </GenericModal>
       
      )}
       <ToastContainer></ToastContainer>
    </>
  );
};
export default Index;
