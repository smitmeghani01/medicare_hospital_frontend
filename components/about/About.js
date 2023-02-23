import Check from "../common/icons/Check";
import Information from "./Information";
import Doctor from "../common/icons/Doctor";
import Medic from "../common/icons/Medic";
import { useState,useEffect } from "react";
import axios from "axios";
const About = (props) => {
  const [abtText,setAbtText]=useState("")
  const fetchAbtData=async()=>{
    const result =await axios.get('http://localhost:5000/api/scrape/about?url=https://www.criticareasiahospital.com/about-us/')
    setAbtText(result.data.about)
  }
  useEffect(()=>{

   fetchAbtData()
  },[])
  return (
    <div className="w-full flex">
      <div className="flex flex-col w-[50%]">
        <div className="font-Heading text-base text-tertiaryblue-50 font-semibold">
          {props.title || `About Us`}
        </div>
        <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5 w-[100%]">
          <span>Tackle the Challenge Of</span>
          <span>Deliverying Health Care</span>
        </div>
        <div className="flex w-[100%] flex-wrap mt-8 font-Heading text-lg text-blackShade-50">
          <p>
           {abtText.substring(0,500)}
          </p>
        </div>
        <ul className="list-none font-Heading text-blackShade-50 text-base mt-5 flex flex-col  space-y-4 font-bold">
          <li className="flex items-center">
            <span
              className="mr-5 bg-[#dfecff] p-2 rounded-full hover:bg-tertiaryblue-50 hover:transition-all "
              id="rotate"
            >
              <Check></Check>
            </span>
            Consultation of Wif Specialized Pediatrecians
          </li>
          <li className="flex items-center">
            <span
              className="mr-5 bg-[#dfecff] p-2 rounded-full hover:bg-tertiaryblue-50 hover:transition-all"
              id="rotate"
            >
              <Check></Check>
            </span>
            A Wide Range of Laboratory Studies
          </li>
          <li className="flex items-center">
            <span
              className="mr-5 bg-[#dfecff] p-2 rounded-full hover:bg-tertiaryblue-50 hover:transition-all"
              id="rotate"
            >
              <Check></Check>
            </span>
            Ultrasound Examination
          </li>
          <li className="flex items-center">
            <span
              className="mr-5 bg-[#dfecff] p-2 rounded-full hover:bg-tertiaryblue-50 hover:transition-all"
              id="rotate"
            >
              <Check></Check>
            </span>
            ECG ,Echocardiography
          </li>
        </ul>
        {props.show && (
          <div className="px-5 py-2 bg-tertiaryblue-50 text-xl text-tertiarywhite-100 w-[30%] my-10 text-center rounded-md font-Heading font-semibold">
            <button>{props.text}</button>
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
};
export default About;
