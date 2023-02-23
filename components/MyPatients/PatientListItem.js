import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function PatientListItem(props) {
  return (
    <li className="flex py-6 px-6 space-x-5 text-sm font-display border-b-2 border-gray-200">
      <div className="w-[25%] flex-shrink-0">{props?.name}</div>
      <div className="w-[20%] flex-shrink-0">{props?.id}</div>
      <div className="w-[40%] flex-shrink-0 break-words">
        {props?.diagnosis}
      </div>
      <div className="w-[10%] flex-shrink-0 flex space-x-8">
        <div>{props?.lastVisit}</div>
        <button onClick={() => {
          props?.onOpenPatientDetailsPage(props?.id)
        }}>
          <FontAwesomeIcon className="text-indigo-700" icon={faAngleRight} />
        </button>
      </div>
    </li>
  );
}

export default PatientListItem;
