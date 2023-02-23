import { useState } from "react";
import Book from "./Book";
import Online from "./Online";
import { Appointment } from "../context/AppointmentContext";
import { useContext } from "react";
import { useEffect } from "react";
import Offline from "./Offline";
const Slots = ({step,props}) => {
  const ctx=useContext(Appointment)
  const [mode,setMode]=useState("online")
  const [time,setTime]=useState("9")
  const [date,setDate]=useState("")
  const dateHandler=(date)=>{
    setDate(date)
  }
  useEffect(()=>{

     if(date=="")
     ctx.updateAppointmentStep1(mode,time,new Date())
     else
    ctx.updateAppointmentStep1(mode,time,date)
   
    console.log(ctx.appointment)
    console.log(mode,time,date)

  },[mode,time,date])

  
  return (
    

    <div>
      {step == 1 && (
        <form className="flex w-full justify-center items-center flex-wrap">
          <div className="my-3 mx-5 w-[40%] flex flex-col">
            <label htmlFor="" className="text-lg font-semibold my-2">
              Select Appointment Date
              <span className="text-red-600 mx-1">*</span>
            </label>
            <Book dateHandler={dateHandler}/>
          </div>

          <div className="flex flex-col ml-5 my-3 w-[50%] ">
            <label htmlFor="time " className="text-lg font-semibold my-2">
              Select Time Slot <span className="text-red-600 mx-1">*</span>
            </label>
            <select
              className="rounded-md  text-base font-base border border-slate-400 bg-slate-100 py-3.5 px-1 w-[80%] "
              placeholder="Select Slot.."
              name="time"
              onChange={(e)=>setTime(e.target.value)}
            >
              <option value="9">9:00-10.30</option>
              <option value="11">11:00 - 12.30</option>
              <option value="13.30">13.30 - 15.00</option>
              <option value="15.30">15:30 - 17.00</option>
              <option value="17.30">17.30 -19.00</option>
            </select>
          </div>
          <div className="flex flex-col  my-1 w-[100%] ml-5 ">
            <label htmlFor="time " className="text-lg font-semibold my-2">
              Select Mode of Appointment{" "}
              <span className="text-red-600 mx-1">*</span>
            </label>
            <select
              className="rounded-md  text-base font-base border border-slate-400 bg-slate-100 py-3.5 px-1 w-[42%] "
              placeholder="Select Mode.."
              name="time"
              onChange={(e)=>setMode(e.target.value)}
            >
              <option value="online">Online </option>
              <option value="offline">Offline</option>
            </select>
          </div>
        </form>
      )}
      {
        step==2 && mode=="online"&& <Online></Online>
      }
      {
        step==2 && mode=='offline' && <Offline {...props}></Offline>
      }
       {
        step==3 && <div className="font-Heading text-lg text-tertiaryred-50 w-full text-center font-semibold">
          Book Now & Kindly Proceed to payment
        </div>
      }
     
    </div>
  );
};
export default Slots;
