function MedicalHistoryListItem(props){
  const showReportHandler = () => {
    
  }

  return (
    <li className="flex py-3 px-6 space-x-5 text-sm font-display bg-white rounded-md">
      <div className="w-[10%]">{props?.date}</div>
      <div className="w-[25%]">{props?.illness}</div>
      <div className="w-[40%]">{props?.description}</div>
      <div className="w-[10%] flex justify-center">{props?.report ? <button onClick={props?.onShowReport}
      className="text-indigo-700">View Report</button> : "-"}</div>
    </li>
  )
}

export default MedicalHistoryListItem;