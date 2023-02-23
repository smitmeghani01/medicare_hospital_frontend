import Tags from "./Tags";
import { useState,useEffect } from "react";
import axios from "axios";
import { getTextFieldUtilityClass } from "@mui/material";
const Blog = () => {
  const [depText,setdepText]=useState("")
  const fetchdepData=async()=>{
    const result =await axios.get('http://localhost:5000/api/scrape/service?url=https://www.criticareasiahospital.com/diagnostic-services/')
    setdepText(result.data)
  }
  useEffect(()=>{

   fetchdepData()
  },[])
  const getText=(paraTitle,index)=>{
  for(let i=index;i<paraTitle.length;i++){
    if(paraTitle[i].length>150)
    return paraTitle[i]
    else
    continue

  }
  }
  return (
    <div>
      <ul className="flex flex-col py-5 items-center justify-center">
        {depText && depText.headTitle.map((head,i)=><li className="flex justify-between items-center w-full my-10 border-b-2 py-10 border-tertiarygrey-500">
          <div className="text-3xl font-base font-Heading text-navyblue-900"><h4 className="my-5 font-bold">{head}</h4> <p className="font-title  text-lg mr-10 w-[80%]">{getText(depText.paraTitle,i)}</p></div>
           <img src={depText.images[i+1]} className="w-[600px] h-[300px]"></img>
        </li>)}
      </ul>
      <img src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-[70%]"></img>
      <div className="my-4">
        <h1 className="text-3xl text-blackShade-50 font-Heading font-bold">
          Medical Specialty Health
        </h1>
        <div className="flex space-x-10">
        <p className="w-[70%] my-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis
          Fugiat, a odio! Quisquam libero impedit dicta rerum Lorem ipsum. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis
          Fugiat, a odio! Quisquam libero impedit dicta rerum Lorem ipsum. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <Tags></Tags>
        </div>
        
      </div>
      <div>
        <h1 className="text-3xl text-blackShade-50 font-Heading font-bold">
        New Operating Suites
        </h1>
        <p className="w-[70%] my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis hic.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, a
          odio! Quisquam libero impedit dicta rerum neque fuga nobis animi
          incidunt adipisci magni, inventore est quam soluta eum reiciendis
          Fugiat, a odio! Quisquam libero impedit dicta rerum Lorem ipsum. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>
    </div>
  );
};
export default Blog;
