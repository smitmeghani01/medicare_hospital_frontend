function Navbar(props) {
  return (
    <div className = "font-display flex space-x-8 font-normal px-6 text-base border-b-[0.5px] border-tertiarygrey-500">
      <button onClick = {() => props.onClickTab("My Profile")} 
        className = {`px-2 py-3 ${props?.currentTab === "My Profile" && "text-tertiaryblue-50 font-medium border-b-[3px]"}`}> My Profile </button>
      <button onClick = {() => props.onClickTab("Edit Profile")}
        className = {`px-2 py-3 ${props?.currentTab === "Edit Profile" && "text-tertiaryblue-50 font-medium border-b-[3px]"}`}> Edit Profile </button>
      <button onClick = {() => props.onClickTab("Certificates")}
        className = {`px-2 py-3 ${props?.currentTab === "Certificates" && "text-tertiaryblue-50 font-medium border-b-[3px]"}`}> Certificates </button>
        <button onClick = {() => props.onClickTab("Security")}
        className = {`px-2 py-3 ${props?.currentTab === "Security" && "text-tertiaryblue-50 font-medium border-b-[3px]"}`}> Security </button>
    </div>
  )
}

export default Navbar;