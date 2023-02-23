import GeneralInfo from "./GeneralInfo";
import MiddleDiv from "./MiddleDiv";
function DoctorOverview(props){
    return(
        <div className = "flex flex-col space-y-8">
            <GeneralInfo />
            <MiddleDiv />
        </div>
    )
}

export default DoctorOverview;