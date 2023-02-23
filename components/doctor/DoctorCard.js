import Card from "../common/Card"
import Link from "next/link"
import { useRouter } from "next/router"
const DoctorCard=props=>{
    const router=useRouter()
return(
    <div className="relative z-10  my-4" id="doc" role={"doc"} key={props.key} onClick={()=>router.push(`/doctors/${props.id}`)}>
        <img src={props.image} className="h-[500px] w-[370px] object-center " ></img>
        <div className="absolute bg-navyblue-900 text-tertiarywhite-100 text-2xl font-display bottom-0  w-[370px] text-center font-bold pt-3 pb-5  " id="des">
            <div >{props.name}</div>
            <div className="mt-1 text-base font-semibold font-Heading">{props.expertise}</div>
        </div>
    </div>
)
}
export default DoctorCard