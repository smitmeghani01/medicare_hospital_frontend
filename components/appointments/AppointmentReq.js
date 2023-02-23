import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import GenericModal from "../common/GenericModal";

const AppRequest = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [app, setApp] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [requestId, setRequestId] = useState("");
  const closeHandler = () => {
    setShowModal(false);
    props.closeHandler();
  };

  const fetchAppointmentdetails = async () => {
    axios
      .get(`https://hm-project-finalbackend.herokuapp.com/api/appointments/${requestId}`)
      .then((result) => {
        setApp(result.data.appointment);
      });
  };

  useEffect(() => {
    if (showModal) {
      setIsLoading(true);
      fetchAppointmentdetails().then(() => {
        //fetchLocation(result.data.ambulance.location.lat,result.data.ambulance.location.lng)
        setIsLoading(false);
      });
    }
  }, [showModal]);
  return (
    <>
      <div
        className={
          "w-[100%] justify-evenly text-xl my-4 py-5 rounded-md text-blackShade-50 bg-tertiarywhite-50 items-center flex shadow-md"
        }
        key={props.key}
      >
        <div className="w-[15%] text-center">{new Date(props.slot.date).toDateString()}</div>
        <div className="w-[15%] text-center">{props.slot.start_time}</div>
        <div className="w-[15%] text-centre">{props.mode}</div>
        <div
          className={
            props.status == "Pending"
              ? "rounded-md w-[10%] text-center bg-tertiaryViolet text-tertiarywhite-100 py-2"
              : " rounded-md w-[10%] text-center bg-tertiaryblue-50 text-tertiarywhite-100 py-2 cursor-pointer"
          }
          onClick={() => {
            if (props.status == "Pending") return;
            setShowModal(true);
            props.openHandler();
            setRequestId(props.id);
          }}
        >
          {props.status}
        </div>
        <div className="w-[13%] text-centre">{props.illness}</div>
      </div>
      {showModal && props.status == "Approved" && add && (
        <GenericModal
          title="Appointment Details"
          posText="Done"
          negText="Cancel"
          closeHandler={closeHandler}
          negHandler={closeHandler}
          posHandler={closeHandler}
        >
          <div className="flex flex-col px-10 py-4 space-y-5">
            <h1 className="font-display font-extrabold text-2xl ">
              Appointment Details
            </h1>
          </div>
        </GenericModal>
      )}
    </>
  );
};
export default AppRequest;
