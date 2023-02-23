const Tags=()=>{
    const tags=['Health','Medicine','Global','Clinic','Medical']
    return(
        <div className="px-5 py-2 shadow-md  w-[30%] h-fit " role={"tag"}>
            <h1 className="text-blackShade-50 text-2xl font-bold font-Heading py-4">Tags</h1>
            <div className="flex h-1 w-full rounded-md ">
                <div className="h-1 w-[20%] bg-tertiaryblue-50 rounded-md"></div><div className="h-1 w-[80%] bg-tertiarygrey-575 rounded-md"></div>
            </div>
            <div className="flex flex-wrap  w-full my-5">
                {tags.length>0 && tags.map((tag,i)=><div className="border border-tertiarygrey-500 flex justify-center items-center font-display py-2 w-[32%] mr-1 mb-3 " key={i}>{tag}</div>)}
            </div>

        </div>
    )
}
export default Tags;