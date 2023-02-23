import {useState, useEffect} from "react";
import { faHome, faCalendar, faMessage, faUser, faGear, faM } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SidebarIcon from "./SidebarIcon";
import { useRouter } from "next/router";
import Link from "next/link";

function Sidebar(props){
    const [tabClicked, setTabClicked] = useState("overview_sidebar_icon");
    const Router = useRouter();
    
    useEffect(() =>{
        if(Router.pathname === "/doctor"){
            setTabClicked("overview_sidebar_icon");
        }
        else{
            const index = Router.pathname.indexOf("/", 8);
            const path = index >= 8 ? Router.pathname.slice(8, index) : Router.pathname.slice(8);
            setTabClicked(`${path}_sidebar_icon`);
        }
    },[Router.pathname])

    const tabClickHandler = (tabKey, path) =>{
        if(tabKey === "overview_sidebar_icon"){
            path = "";
        }
        Router.push(`/doctor/${path}`);
    }

    return(
        <div className = "flex flex-col items-center w-28 h-screen bg-white z-10 shrink-0">
            <h2 className = {`text-indigo-900`}><Link href = ""><FontAwesomeIcon icon = {faM}></FontAwesomeIcon></Link></h2>
            <div className = {`w-[100%] flex flex-col justify-center h-[85%] items-center`}>
                <SidebarIcon icon = {faHome} id = "overview_sidebar_icon" onClick = {tabClickHandler} isSelected = {tabClicked === "overview_sidebar_icon"}/>
                <SidebarIcon icon = {faCalendar} id = "appointments_sidebar_icon" onClick = {tabClickHandler} isSelected = {tabClicked === "appointments_sidebar_icon"}/>
                <SidebarIcon icon = {faMessage} id = "messages_sidebar_icon" onClick = {tabClickHandler} isSelected = {tabClicked === "messages_sidebar_icon"}/>
                <SidebarIcon icon = {faUser} id = "patients_sidebar_icon" onClick = {tabClickHandler} isSelected = {tabClicked === "patients_sidebar_icon"}/>
                <SidebarIcon icon = {faGear} id = "settings_sidebar_icon" onClick = {tabClickHandler} isSelected = {tabClicked === "settings_sidebar_icon"}/>
            </div>
        </div>
    )
}

export default Sidebar;