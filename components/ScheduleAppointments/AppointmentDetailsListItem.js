import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";
import ProfilePicture from "../common/ProfilePicture";

function AppointmentDetailsListItem(props) {
  let confirmationStatusDiv = "";
  if (props?.status === "Confirmed") {
    confirmationStatusDiv = (
      <div className="text-[11px] text-[#9290e9] bg-[#e9f6fe] rounded font-bold w-[19%] text-center p-[6px] m-2" role="confirmed">
        Confirmed
      </div>
    );
  } else if (props?.status === "Pending") {
    confirmationStatusDiv = (
      <div className="flex m-2 justify-center w-[19%]">
        <button
          className="text-[20px] mr-1 text-[#9290e9]"
          onClick={(event) => {
            event.stopPropagation();
            props.onConfirmAppointment(props.id);
          }}
          role={`app${props.id}`}
        >
          <FontAwesomeIcon icon={faCheckSquare} />
        </button>
        <button
          className="text-[20px] ml-1 text-[#eb6c76]"
          onClick={(event) => {
            event.stopPropagation();
            props.onDeclineAppointment(props.id);
          }}
        >
          <FontAwesomeIcon icon={faXmarkSquare} />
        </button>
      </div>
    );
  } else {
    confirmationStatusDiv = (
      <div className="text-[11px] text-[#eb6c76] bg-[#feeeef] rounded font-bold w-[19%] text-center p-[6px] m-2">
        Declined
      </div>
    );
  }

  return (
    <li
      className="flex items-center p-2 py-1 hover:bg-gray-500 hover:text-white cursor-pointer"
      onClick={props.onAppointmentClick}
    >
      <ProfilePicture
        profilePicture={props?.profilePicture}
        className="w-[45px] h-[45px] m-2"
      />
      <div className="m-2 mr-6 flex-grow">
        <p className="text-[13px] font-semibold">{props.name}</p>
        <p className="text-[13px] text-gray-400">{`${props.gender || "Male"}, ${props.date}, ${props.time}`}</p>
      </div>
      {confirmationStatusDiv}
    </li>
  );
}

export default AppointmentDetailsListItem;
