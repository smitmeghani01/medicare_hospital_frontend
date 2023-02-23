import Card from "../common/Card";

function AppointmentInfoCard(props){
    return(
        <div className = {` w-[100%]`}>
            <div className = "flex justify-between items-center">
                <h3 className = "mb-[12px] font-bold">{props.header}</h3>
                {props.action}
            </div>
            <Card className = {`${props.className}`}>
                {props.children}
            </Card>
        </div>
    )
}

export default AppointmentInfoCard;