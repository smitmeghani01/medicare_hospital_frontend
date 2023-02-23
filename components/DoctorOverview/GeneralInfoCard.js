import Card from "../common/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GeneralInfoCard(props){
    return(
        <Card className = {props.className?`${props.className} my-3 py-3  items-center`:"bg-white my-3 py-3  items-center"}>
            <div className = "h-[60px] w-[60px] rounded-full bg-gray-300 bg-opacity-30 text-white mx-4 text-lg flex justify-center items-center">
                <FontAwesomeIcon icon = {props.icon} />
            </div>
            <div className = "h-[100%] m-5 ml-0 w-[60%] mr-6 flex flex-col justify-center  ">
                <h2 className = "text-lg font-bold text-white">{props.title}</h2>
                <p className = "text-gray-200 text-xs w-[80%]">{props.description}</p>
            </div>
        </Card>
    )
}

export default GeneralInfoCard;