import React, { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import GenericModal from "../common/GenericModal";
import Book from "../appointments/Book";
import Slots from "../appointments/Slots";
import Star from "../common/icons/Star";
import Education from "../common/icons/Education";
import { Appointment } from "../context/AppointmentContext";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
const DoctorDetails = (props) => {
  console.log(props.certificates);
  const [posText, setPostText] = useState("Next");
  const [negText, setNegText] = useState("Cancel");
  const [title, setTitle] = useState("Appointment Scheduling");
  const [step, setStep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const ctx=useContext(Appointment)
  const auth=useContext(AuthContext)
  const posHandler = () => {
    setStep(step + 1);
  };
  const negHandler = () => {
    setStep(step - 1);
  };
  const saveHandler = () => {
    ctx.createAppointment("Pending")
    closeHandler()
  };
  const closeHandler = () => {
    setShowModal(false);
  };
  const openHandler = () => {
    setShowModal(true);
  };
  useEffect(()=>{
  ctx.updateAppointmentStep3(auth.id,props.id,props.expertise)
  console.log(ctx.appointment)
  },[])
  useEffect(() => {
    if (step == 3) setPostText("Book Now");
    else setPostText("Next");
    if (step == 2 || step == 3) setNegText("Back");
    else setNegText("Cancel");
    if (step == 1) setTitle("Appointment Scheduling");
    if (step == 2) setTitle("Mode of Appointment");
    if (step == 3) setTitle("Payment");
  }, [step]);
  let i = 0;
  const handleStars = () => {
    if (props.rating == 4) {
      return (
        <>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
        </>
      );
    }
    if (props.rating == 5) {
      return (
        <>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
          <Star></Star>
        </>
      );
    }
    if(props.rating==3)
    {
    return(
      <>
      <Star></Star>
      <Star></Star>
      <Star></Star>
      
      </>
    )
    }
  };
  return (
    <>
      {showModal && (
        <GenericModal
          title={title}
          posText={posText}
          negText={negText}
          posHandler={posHandler}
          saveHandler={saveHandler}
          closeHandler={closeHandler}
          negHandler={negHandler}
          step={step}
          isPos={true}
          isNeg={true}
          isStepModal={true}
        >
          <Slots step={step} props={props} />
          <div className="flex justify-center w-[100%] space-x-3 mt-10">
            <span
              className={
                step == 1
                  ? `bg-navyblue-900 w-10 h-1 rounded-md`
                  : `bg-tertiaryblue-60 w-10 h-1 rounded-md`
              }
            ></span>
            <span
              className={
                step == 2
                  ? `bg-navyblue-900 w-10 h-1 rounded-md`
                  : `bg-tertiaryblue-60 w-10 h-1 rounded-md`
              }
            ></span>
            <span
              className={
                step == 3
                  ? `bg-navyblue-900 w-10 h-1 rounded-md`
                  : `bg-tertiaryblue-60 w-10 h-1 rounded-md`
              }
            ></span>
          </div>
        </GenericModal>
      )}
      <div className={showModal && "h-[0vh] overflow-hidden"}>
        <div className="flex  justify-center my-5 font-display ">
          <div className="opacity-100 bg-tertiarygrey-575 w-[90%]  rounded-md mt-10 ml-10 flex ">
            <div className="w-[30%]  flex items-center  ">
              <div className="h-full bg-tertiaryblue-50 w-10 "></div>
              <div className="h-full flex flex-col justify-center">
                <div className="h-8 w-[50%] bg-tertiaryblue-50 rounded-r-md"></div>

                <img
                  src={props.image}
                  className="w-[100%] h-[90%] rounded-md "
                ></img>
                <div className="h-8 w-[50%] bg-tertiaryblue-50 rounded-r-md"></div>
              </div>
            </div>
            <div className="flex flex-col w-[70%] justify-start">
              <h1 className="font-bold text-3xl px-7 text-left text-navyblue-900 mt-10">
                {props.name}
              </h1>
              <p className="text-left text-xl my-3 px-7 text-tertiaryblue-50 font-base font-Heading">{`Specialization in ${props.expertise} problems`}</p>
              <div className="flex px-7 my-1 ">{handleStars()}</div>
              {<div className="flex flex-col mx-7">
              <h1 className="font-semibold border-l-4 border-l-tertiaryblue-50 text-2xl px-2  text-left text-tertiaryblue-50 my-2 font-Heading">
                Education
              </h1>
              {props.education && props.education.map((ed,i)=><div className="font-display text-base my-2 flex space-x-2 items-center" key={i}><span className="bg-tertiaryblue-60 p-2 rounded-full hover:bg-tertiaryblue-50 hover:transition-all"><Education></Education></span><span>{ed}</span></div>)}
              </div>}
              <h1 className="font-semibold text-2xl mx-7 px-2 font-Heading text-left text-tertiaryblue-50 my-2 border-l-4 border-l-tertiaryblue-50">
                Additional Information
              </h1>
              <p className="pb-4 pt-2 px-7  text-gray-600  text-sm w-[100%] text-left ">
                {props.des}
              </p>
              <div className="flex w-full px-7 my-3">
                <button
                  className="bg-tertiaryViolet text-tertiarywhite-100  text-base rounded-md px-6 py-2"
                  onClick={openHandler}
                  role="book"
                >
                  BOOK AN APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DoctorDetails;
