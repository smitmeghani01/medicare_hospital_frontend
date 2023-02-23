function AppointmentsTodayListItem(props){
    
    return(
        <li className = "flex items-center px-4 py-1 w-[100%]">
            <div className = "rounded-full bg-gray-400 h-[45px] w-[45px] m-2">
                <img className = "h-[100%] w-[100%] rounded-full object-cover object-center" src = {props.profilePicture || "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"} />
            </div>
            <div className = "m-2 mr-6 flex-grow">
                <p className = "text-[13px] font-semibold">{props.name}</p>
                <p className = "text-[13px] text-gray-400">{props.description}</p>
            </div>
            <div className = "text-[11px] m-2 w-[19%]">
            {props.time}    
            </div>
        </li>
    )
}

export default AppointmentsTodayListItem;