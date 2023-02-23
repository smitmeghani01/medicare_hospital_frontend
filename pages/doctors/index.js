import { useRef, useState } from "react";
import NavBar from "../../components/common/NavBar";
import DoctorList from "../../components/doctor/DoctorList";
import styles from "../../styles/Home.module.css";
import SearchIcon from "../../components/common/icons/Search";
import axios from "axios";
const Index = (props) => {
  const [fees, setFees] = useState("any");
  const [type, setType] = useState("All");
  const [isSearched, setIsSearched] = useState(false);
  const [keyWord, setkeyWord] = useState("");

  const filterHandler = (event) => {
    setType(event.target.value);
  };

  const feesHandler = (e) => {
    setFees(e.target.value);
  };

  const handleSearch = (e) => {
    console.log(keyWord);
    if (e.key == "Enter") {
      e.preventDefault();
      setIsSearched(true);
    }
  };
  const categories = [
    "All",
    "Heart",
    "Eyes",
    "Lungs",
    "Tooth",
    "Brain",
    "Skin",
  ];
  return (
    <>
      <NavBar></NavBar>
      <div className={`h-[700px] flex ${styles.doc}`}>
        <div className="flex flex-col mt-[8%] ml-[10%] justify-center  ">
          <div className="font-Heading text-lg text-tertiaryblue-50 font-semibold">
            Our Doctors
          </div>
          <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
            <span>All the Expertise For Your Health</span>
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
      <div className="flex flex-col w-[100%] items-center my-4">
        <div className="font-Heading text-base text-tertiaryblue-50 font-semibold">
          Our Doctor&#39;s
        </div>
        <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
          <span>Our Expert Doctor&#39;s</span>
        </div>
        <div className="flex w-[60%] flex-wrap mt-8 font-Heading text-lg text-blackShade-50 text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco
          </p>
        </div>
      </div>
      <div className="mx-[20%] my-10">
        <form className="flex items-center  ">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full  mt-8">
            <div className="flex absolute inset-y-0 left-0 items-center pl-6 cursor-pointer">
              <SearchIcon />
            </div>
            <input
              type="text"
              className="border   border-tertiarygrey-200  font-display focus:outline-none text-sm  block w-[60%] pl-14 p-3  rounded-full "
              placeholder="Search"
              value={keyWord}
              onChange={(event) => {
                setkeyWord(event.target.value);
                setIsSearched(false);
              }}
              onKeyDown={handleSearch}
            />
          </div>
        </form>
        <div className="flex w-full justify-center my-5 bg-tertiarywhite-50 rounded-full px-2 cursor-pointer">
          {categories &&
            categories.map((cat, i) => (
              <div
                className={
                  type == cat
                    ? "font-Heading flex w-[20%] justify-center  py-3 px-2 rounded-full bg-tertiaryblue-50 text-tertiarywhite-50"
                    : "font-Heading flex w-[20%]  py-3 px-2 rounded-full justify-center"
                }
                key={i}
                onClick={() => setType(cat)}
              >
                {cat}
              </div>
            ))}
        </div>
      </div>
      <div className="w-full flex">
        <DoctorList
          expertise={type}
          fees={fees}
          keyWord={keyWord}
          isSearched={isSearched}
        ></DoctorList>
        <div className="px-9 py-6 shadow-md  h-fit my-20 font-Heading mr-5 bg-tertiarywhite-50">
          <h1 className="text-blackShade-50 text-2xl font-bold font-Heading py-4">
            Filters
          </h1>
          <div className="flex h-1 w-full rounded-md ">
            <div className="h-1 w-[20%] bg-tertiaryblue-50 rounded-md"></div>
            <div className="h-1 w-[80%] bg-tertiarygrey-575 rounded-md"></div>
          </div>
          <form className="flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <label
              htmlFor="doctors"
              className="text-base text-blackShade-50 font-semibold my-2"
            >
              Consultation Fees
            </label>
            <select
              name="doctors"
              onChange={feesHandler}
              className="rounded-md w-[100%] border border-r-navyblue-900 font-display bg-tertiaryblue-60  py-2 text-left"
            >
              <option value="any">Any</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
              <option value="1500">1500</option>
              <option value="2000">2000</option>
              <option value="3000">3000</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};
export default Index;
