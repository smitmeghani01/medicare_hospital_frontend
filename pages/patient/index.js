import NavBar from "../../components/common/NavBar";
import styles from "../../styles/Home.module.css";
import Card from "../../components/common/Card";
import Link from "next/link";
import Information from "../../components/about/Information";
import Doctor from "../../components/common/icons/Doctor";
import Medic from "../../components/common/icons/Medic";
import About from "../../components/about/About";
import Department from "../../components/departments/Department";
import Experts from "../../components/doctor/Experts";
import React from 'react'

const Index = (props) => {
  
  return (
    <>
      <NavBar></NavBar>
      <div className={`h-[500px] flex ${styles.home}`}>
        <div className="flex flex-col mt-[4%] ml-[10%] bg-opacity-60  ">
          <div className="font-Heading text-base text-tertiaryblue-50 font-semibold">
            Welcome To Medicare
          </div>
          <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
            <span>Exceptional Medical</span>
            <span>Speciality Healthcare</span>
          </div>
          <div className="flex w-[60%] flex-wrap mt-8 font-Heading text-lg text-tertiarywhite-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
          </div>
          <div className="flex my-10 space-x-8 font-display">
            <button className="text-lg font-Heading text px-6 py-3 bg-tertiaryblue-50 text-tertiarywhite-100 rounded-md ">
              View Departments
            </button>
            <button className="text-lg font-Heading text px-8 py-3 bg-navyblue-900 text-tertiarywhite-100 rounded-md">
              Learn About Us
            </button>
          </div>
        </div>
      </div>
      <div className="ml-[10%] mt-5">
        <About show={true} text="More About Us">
          <div className="w-[53%] px-10 flex flex-wrap my-10 ">
            <Information title="Skilled Doctors" id="tl">
              <Doctor></Doctor>
            </Information>
            <Information title="Quality Services" id="tr">
              <Doctor></Doctor>
            </Information>
            <Information title="Positive Reviews" id="bl">
              <Doctor></Doctor>
            </Information>
            <Information title="Latest Equip" id="br">
              <Medic></Medic>
            </Information>
          </div>
        </About>
        <Department></Department>
      </div>
      <div className="mt-5 ml-[5%]">
        <Experts></Experts>
      </div>
      
    </>
  );
};
export default Index;
