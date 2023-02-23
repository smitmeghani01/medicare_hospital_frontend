import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import {toast,ToastContainer} from "react-toastify"

export const Appointment=createContext(({
    appointment:{},
    createAppointment:()=>{},
    updateAppointmentStep1:()=>{},
    updateAppointmentStep2:()=>{},
    updateAppointmentStep3:()=>{}

}))

const AppointmentContext=(props)=>{
    const [appointment,setAppointment]=useState({})
    const createAppointment=async(status)=>{
        let app={
            appointment:{
                ...appointment
            }
        }
        await axios.post('https://hm-project-finalbackend.herokuapp.com/api/appointments',app).then((result)=>{
         axios.patch(`https://hm-project-finalbackend.herokuapp.com/api/doctors/${result.data.appointment.doctor}`,{appointments:result.data.appointment.id}).then(()=>{
            toast.success("Request Successful !", {
                position: toast.POSITION.BOTTOM_RIGHT,
              });})
            
        })



    }
    const updateAppointmentStep1=(mode,time,date)=>{
       
        setAppointment({...appointment,mode,slot:{
            start_time:time,date
        }})
    }
    const updateAppointmentStep2=(online_type,text,media)=>{
        setAppointment({...appointment,online_type,description:{
            text,media
        }})
    }
    const updateAppointmentStep3=(patient,doctor,illness)=>{
        setAppointment({...appointment,patient,doctor,illness})

    }
    return(
        <Appointment.Provider value={{
         updateAppointmentStep1,
         updateAppointmentStep2,
         updateAppointmentStep3,
         createAppointment,
         appointment
        }}>
            {props.children}
            <ToastContainer></ToastContainer>
        </Appointment.Provider>
    )
}
export default AppointmentContext