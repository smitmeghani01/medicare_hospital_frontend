import { Card } from "@mui/material";

function PreviousAppointmentListItem(props){
  return(
    <li className="flex py-3 px-6 space-x-5 text-sm font-display bg-white rounded-md">
      <div className="w-[10%]">{props?.date}</div>
      <div className="w-[25%]">{props?.illness}</div>
      <div className="w-[10%]">{props?.mode}</div>
      <div className="w-[10%]">{props?.isFollowUp ? "Follow Up" : "First Visit"}</div>
      <div className="w-[35%] flex-grow break-words">{props?.comments}</div>
    </li>
  )
}

export default PreviousAppointmentListItem;