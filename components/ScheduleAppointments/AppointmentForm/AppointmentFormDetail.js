function AppointmentFormDetail(props){
    return(
        <div className= "flex flex-col">
            <span className="font-display">{props?.title}</span>
            <span className="font-title">{props?.description}</span>
        </div>
    )
}

export default AppointmentFormDetail;