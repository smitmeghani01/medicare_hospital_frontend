const Information=(props)=>{
    return(
    <div className={`w-[44%] bg-tertiarywhite-50 shadow-md flex flex-col items-center px-10 py-7 hover:translate-y-[-10px] hover:transition-all mx-[3%] my-[3%]`} id={props.id}>
        <span className="mr-5 bg-[#dfecff] p-2 rounded-full hover:bg-tertiaryblue-50 hover:transition-all " id="rotate">{props.children}</span>
        <h1 className="font-Heading text-2xl font-bold my-4">{props.title}</h1>
        <p className="text-center font-display my-2">{props.info || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod '}</p>
        <button className="text-tertiaryblue-50 font-bold font-Heading">Read More</button>


    </div>)
}
export default Information