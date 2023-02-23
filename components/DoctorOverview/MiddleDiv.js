import AppointmentsInfo from "./ApppointmentsInfo";
import PatientsInfo from "./PatientsInfo";
import AppointmentsToday from "./AppointmentsToday";
import PatientGenderChart from "./PatientGenderChart";

function MiddleDiv(props){
    return(
        <div className = "w-[100%] flex space-x-6">
            <div className = "w-[27%] flex-grow">
                <AppointmentsInfo />
            </div>
            <div className = "w-[40%] space-y-4 flex-grow">
                <PatientsInfo />
                <PatientGenderChart />
            </div>
            <div className = "w-[27%] flex-grow">
                <AppointmentsToday />
            </div>
        </div>
    )
}

export default MiddleDiv;