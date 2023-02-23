import Router from "next/router";
import { DUMMY_DOCTORS } from "../../components/doctor/DoctorList";
import { useRouter } from "next/router";
import DoctorDetails from "../../components/doctor/DoctorDetails";
import { useEffect } from "react";
import { ClassicSpinner } from "react-spinners-kit";
import axios from "axios";
import styles from "../../styles/Home.module.css"

import NavBar from "../../components/common/NavBar";
import { useState } from "react";
const Slug = () => {
  const [doctor, setDoctor] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const id = useRouter().query.slug;
  const fetchDoctors = async () => {
    let result;

    result = await axios.get(`https://hm-project-finalbackend.herokuapp.com/api/doctors/${id}`);
    console.log(result.data);
    setDoctor(result.data.doctor);
  };
  useEffect(() => {
    setIsLoading(true);
    fetchDoctors().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className={`h-[600px] flex ${styles.docDetails}`}>
        <div className="flex flex-col mt-[15%] ml-[10%] justify-center  ">
          <div className="font-Heading text-lg text-tertiaryblue-50 my-4 font-semibold">
            Doctor Details
          </div>
          <div className="flex flex-col  font-display text-5xl font-extrabold space-y-5">
            <span>Learn About Our Experts</span>
          </div>
          <div className="flex w-[60%] flex-wrap mt-8 font-Heading text-lg text-tertiarywhite-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="flex justify-center w-full h-full">
          <ClassicSpinner size="30" color="#165FCC"></ClassicSpinner>
        </div>
      )}
      {!isLoading && doctor && <DoctorDetails {...doctor}></DoctorDetails>}
    </>
  );
};
export default Slug;
