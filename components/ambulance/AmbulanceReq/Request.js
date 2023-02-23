import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import GenericModal from "../../common/GenericModal";

const Request = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [amb, setAmb] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [requestId, setRequestId] = useState("");
  const closeHandler = () => {
    setShowModal(false);
    props.closeHandler();
  };

  const [add, setAdd] = useState("");
  const fetchLocation = async (lat, lng) => {
    await axios
      .get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=737ada17b7d84106b103048258edb583`
      )
      .then((res) => {
        setAdd(res.data);
      });
  };
  const fetchAmbulancedetails = async () => {
    axios
      .get(`https://hm-project-finalbackend.herokuapp.com/api/ambulance/${requestId}`)
      .then((result) => {
        fetchLocation(
          parseFloat(props.ambulance.location.lat),
          parseFloat(props.ambulance.location.lng)
        );
        setAmb(result.data.ambulance);
        console.log(result.data.ambulance);
      });
  };

  useEffect(() => {
    if (showModal) {
      setIsLoading(true);
      fetchAmbulancedetails().then(() => {
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
        <div className="w-[20%] text-center">{props.ambulance.name}</div>
        <div className="w-[25%] text-center">
          {props.ambulance.emergency.contact}
        </div>
        <div className="w-[35%] text-left">
          {props.ambulance.emergency.details}
        </div>
        <div
          className={
            props.status=="Rejected"?"rounded-md w-[10%] text-center bg-tertiaryred-150 text-tertiarywhite-100 py-2":
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
      </div>
      {showModal && props.status == "Approved" && add && (
        <GenericModal
          title="Ambulance Details"
          posText="Done"
          negText="Cancel"
          closeHandler={closeHandler}
          negHandler={closeHandler}
          posHandler={closeHandler}
        >
          <div className="flex flex-col px-10 py-4 space-y-5">
            <h1 className="font-display font-extrabold text-2xl ">
              Driver Details
            </h1>
            <div className="flex space-x-12 items-center">
              <img
                src={amb.driver?.image}
                className="rounded-full w-40 h-40"
              ></img>
              <div className="flex flex-col space-y-4 text-lg font-display font-semibold">
                <div>
                  <span className="mr-3 text-tertiaryblue-50 font-Heading">
                    Name:
                  </span>
                  {amb.driver?.name}
                </div>
                <div>
                  <span className="mr-3 text-tertiaryblue-50 font-Heading">
                    Contact:
                  </span>
                  {amb.driver?.mobile}
                </div>
                <div>
                  <span className="mr-3 text-tertiaryblue-50 font-Heading">
                    Location Provided:
                  </span>
                  {add?.features[0]?.properties.formatted}
                </div>
              </div>
            </div>
          </div>
        </GenericModal>
      )}
    </>
  );
};
export default Request;
