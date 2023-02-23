import { useState } from "react";
import About from "./About";
const Choose = () => {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-[100%] items-center">
        <div className="font-Heading text-base text-tertiaryblue-50 font-semibold">
          Why Choose Us
        </div>
        <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
          <span>Why are We Different</span>
        </div>
        <div className="flex w-[60%] flex-wrap mt-8 font-Heading text-lg text-blackShade-50 text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="w-[90%] flex justify-between shadow-sm bg-tertiarywhite-50 rounded-md  px-20 py-5 my-4 items-center font-Heading text-blackShade-50 font-bold text-xl cursor-pointer">
        <span
          onClick={() => {
            setTab1(true);
            setTab2(false);
            setTab3(false);
          }}
          className={tab1 ? "text-tertiaryblue-50" : "text-blackShade-50"}
          role="about"
        >
          Certified Doctor
        </span>
        <span
          onClick={() => {
            setTab1(false);
            setTab2(true);
            setTab3(false);
           
          }}
          
          className={tab2 ? "text-tertiaryblue-50" : "text-blackShade-50"}
        >
          Success Treatment
        </span>
        <span
          onClick={() => {
            setTab1(false);
            setTab2(false);
            setTab3(true);
          }}
          
          className={tab3 ? "text-tertiaryblue-50" : "text-blackShade-50"}
        >
          Mordern Technology
        </span>
      </div>
      {tab1 && (
        <div className="bg-tertiarywhite-50 shadow-sm px-5 py-10 w-[90%] flex justify-center  mx-[5%] rounded-md my-16">
          <About title="Certified Doctors">
            <div className="flex items-center px-5 ">
              <iframe
                width="560"
                height="350px"
                src="https://www.youtube.com/embed/KmYm6zphh_A"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </About>
        </div>
      )}
      {tab2 && (
        <div className="bg-tertiarywhite-50 shadow-sm px-5 py-10 w-[90%] flex justify-center  mx-[5%] rounded-md my-16">
          <About title="Success Treatment">
            <div className="flex items-center px-5 ">
              <iframe
                width="560"
                height="350px"
                src="https://www.youtube.com/embed/LPBTEHYlZK4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </About>
        </div>
      )}
      {tab3 && (
        <div className="bg-tertiarywhite-50 shadow-sm px-5 py-10 w-[90%] flex justify-center  mx-[5%] rounded-md my-16">
          <About title="Mordern Technology">
            <div className="flex items-center px-5 ">
              <iframe
                width="560"
                height="350px"
                src="https://www.youtube.com/embed/C2zfnww0UKo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </About>
        </div>
      )}
    </div>
  );
};
export default Choose;
