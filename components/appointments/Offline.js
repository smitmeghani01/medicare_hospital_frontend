import { useEffect } from "react";
import { useContext } from "react";
import { Appointment } from "../context/AppointmentContext";
const Offline = (props) => {
    const ctx=useContext(Appointment)
    
  return (
    <div className="flex flex-col px-10 py-4 space-y-5 items-center">
      <h1 className="font-display font-extrabold text-2xl  ">Doctor Details</h1>
      <div className="flex space-x-12 items-center">
        <img src={props.image} className="rounded-full w-64 h-64"></img>
        <div className="flex flex-col space-y-4 text-lg font-display font-semibold">
          <div >
            <span className="mr-3 text-tertiaryblue-50 font-Heading">
              Name:
            </span>
            {props?.name}
          </div>
          <div>
            <span className="mr-3 text-tertiaryblue-50 font-Heading">
              Expertise:
            </span>
            {props.expertise}
          </div>
          <div>
            <span className="mr-3 text-tertiaryblue-50 font-Heading">
              Fees:
            </span>
            {props.fees}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Offline