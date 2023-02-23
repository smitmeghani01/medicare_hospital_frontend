import GeneralInfoCard from "./GeneralInfoCard";
import {faUser, faCalendar, faHospital} from "@fortawesome/free-regular-svg-icons"
import {faVideoCamera, faStethoscope} from "@fortawesome/free-solid-svg-icons"
function GeneralInfo(props){
    return(
        <div className = "w-[100%]">
            <div className = "mb-3">
                <h2 className = "text-xl font-bold mb-1">Welcome, Dr. Param!</h2>
                <p className = "text-sm text-gray-500">Have a nice day at work!</p>
            </div>
            <div className = "flex space-x-3">
                <GeneralInfoCard className = "bg-indigo-500" icon = {faCalendar} title = "24.4k" description = "Appointments" />
                <GeneralInfoCard className = "bg-red-500" icon = {faUser} title = "24.4k" description = "Total Patients" />
                <GeneralInfoCard className = "bg-yellow-400" icon = {faVideoCamera} title = "24.4k" description = "Video Conferences" />
                <GeneralInfoCard className = "bg-cyan-400" icon = {faHospital} title = "24.4k" description = "Clinic Consultants" />
                <GeneralInfoCard className = "bg-green-400" icon = {faStethoscope} title = "5" description = "Years Of Practicing" />
            </div>
        </div>
    )
}

export default GeneralInfo;