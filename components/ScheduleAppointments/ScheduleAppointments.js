import AppointmentCalendar from "./AppointmentCalendar";
import AppointmentsInfo from "./AppointmentsInfo"

function ScheduleAppointments(props){
    return (
        <div className = "flex space-x-5 h-full">
            <div className = "w-[70%] h-full">
                <AppointmentCalendar />
            </div>
            <div className = "w-[27%]">
                <AppointmentsInfo />
            </div>
        </div>
    )
}

export default ScheduleAppointments;