import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisease } from "@fortawesome/free-solid-svg-icons";
import PatientHeader from "./PatientHeader";

function AppointmentDetailsModal(props){
    return(
        <div className = "flex flex-col px-16 py-8 pb-4 space-y-7">
            <PatientHeader
                name={props?.name}
                age={props?.age}
                gender={props?.gender}
                profilePicture={props?.profilePicture} />
            {/* <div className = "space-y-3">
                <div className = "flex space-x-3">
                    <p>Illness: </p>
                    <p>{props.illness}</p>
                </div>
                <div className = "flex space-x-3">
                    <p>Description: </p>
                    <p>{props.description}</p>
                </div>
                <div className = "flex space-x-3">
                    <p>Mode: </p>
                    <p>{props.mode}</p>
                </div>
                <div className = "flex space-x-3">
                    <p>Slot: </p>
                    <p>{`${props.date}, ${props.time}`}</p>
                </div>
            </div> */}
                <div className = "flex flex-col space-y-5">
                    <div className = "flex items-start justify-between">
                        <div className = "flex items-center space-x-2">
                            <FontAwesomeIcon className = "text-xl" icon = {faDisease} />
                            <p className = "font-medium">Illness:</p>
                        </div>
                        <p className = "text-gray-500 w-[70%]">{props.illness}</p>
                    </div>
                    <div className = "flex justify-between items-start">
                        <div className = "flex items-center space-x-2">
                            <FontAwesomeIcon className = "text-xl" icon = {faDisease} />
                            <p className = "font-medium">Description:</p>
                        </div>
                        <p className = "text-gray-500 w-[70%]">{props.description}</p>
                    </div>              
                    <div className = "flex space-x-5 items-start justify-between">
                        <div className = "flex items-center space-x-2">
                            <FontAwesomeIcon className = "text-xl" icon = {faDisease} />
                            <p className = "font-medium">Mode:</p>
                        </div>
                        <p className = "text-gray-500 w-[70%]">{props.mode}</p>
                    </div>                
                    <div className = "flex space-x-5 items-start justify-between">
                        <div className = "flex items-center space-x-2">
                            <FontAwesomeIcon className = "text-xl" icon = {faDisease} />
                            <p className = "font-medium">Slot:</p>
                        </div>
                        <p className = "text-gray-500 w-[70%]">{`${props.date}, ${props.time}`}</p>
                    </div>
                </div>
            </div>
    )
}

export default AppointmentDetailsModal;