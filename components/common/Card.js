const Card=(props)=>{
    return(
        <div className={props.className?`${props.className} rounded-lg shadow-md w-[100%] flex box-border`:`bg-white rounded-lg shadow-md w-[100%] flex box-border`}>
        {props.children}
        </div>
    )
}
export default Card;