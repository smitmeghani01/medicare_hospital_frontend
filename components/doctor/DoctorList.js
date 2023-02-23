import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import {ClassicSpinner} from "react-spinners-kit"
import axios from "axios";
const DoctorList = ({ expertise,fees,keyWord,isSearched}) => {
  let [filteredArray, setFilteredArray] = useState([]);
  const [docArray,setDocArray]=useState([])
  const [isLoading,setIsLoading]=useState(false)

  const fetchDoctors=async()=>{
    let result;
    
    result=await axios.get(`https://hm-project-finalbackend.herokuapp.com/api/doctors`)
    console.log(result.data)
    setDocArray(result.data.doctors)
    setFilteredArray(result.data.doctors)
  

  }
  const fetchSearchDoctors=async()=>{
    let result;
    
    result=await axios.get(`https://hm-project-finalbackend.herokuapp.com/api/doctors/search/${keyWord}`)
    console.log(result.data)
    setFilteredArray(result.data.doctors)
  

  }
  useEffect(()=>{
    setIsLoading(true)
    fetchDoctors().then(()=>{
      setIsLoading(false)

    })

  },[])
  useEffect(()=>{
    console.log('keyword',isSearched)
    if(isSearched){
    setIsLoading(true)
    fetchSearchDoctors().then(()=>{
      setIsLoading(false)
      
    })
  }

  },[isSearched])
  useEffect(()=>{
    if(docArray)
    {
      if(expertise=="All" && fees=="any")
      {
        setFilteredArray(docArray)
      }
      else if(fees=="any" && expertise!= "All")
      {
       setFilteredArray((docArray.filter((doc)=>doc.expertise==expertise)))
      }
      else if(expertise=="All" && fees !="any")
      {
        setFilteredArray((docArray.filter((doc)=>doc.fees<= +fees)))
      }
      else{
        setFilteredArray((docArray.filter((doc)=>doc.fees <= +fees && doc.expertise==expertise)))
      }
      
    }

   

  },[expertise,fees])
  useEffect(()=>{
    console.log(filteredArray)
  },[filteredArray])


  
  
  return (
    <>
    {isLoading && <div className="flex justify-center w-full h-full">
      <ClassicSpinner size="30" color="#165FCC"></ClassicSpinner>
      </div>}
      {!isLoading &&<div className="grid grid-cols-3 w-[80%] my-5 mx-20">
        {filteredArray && filteredArray.length >0 && filteredArray.map((doc) => (
    <DoctorCard {...doc} key={doc.id}></DoctorCard>))}
      </div>}
      {!isLoading && filteredArray.length == 0 && (
        <p className="flex justify-center items-center text-lg font-bold w-full mt-20 text-center">
          No Doctors Available
        </p>
      )}
    </>
  );
}
export default DoctorList;
