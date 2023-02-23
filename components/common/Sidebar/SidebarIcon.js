import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function SidebarIcon(props){
    const index = props.id.indexOf("_");
    const path = props.id.slice(0, index);
    const clickHandler = () =>{
        props.onClick(props.id, path)
    }
    return(
            <button className = {`rounded-full block p-5 m-3 w-[55%] text-sm ${props.isSelected ? "bg-indigo-700 text-white" : "bg-gray-300 text-indigo-900"}`} 
            onClick = {clickHandler}>
                <FontAwesomeIcon icon = {props.icon} />
            </button>
    )
}

export default SidebarIcon;