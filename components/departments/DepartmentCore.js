const DepartmentCore = (props) => {
  return (
    <>
      <div
        className={`w-[26%] bg-tertiarywhite-50 shadow-md h-[300px]  relative   hover:transition-all  hover:text-tertiarywhite-100 mx-[3%]   my-[3%] rounded-sm `}
        id={props.id}
      >
        <div className="w-full flex flex-col z-50 items-center relative">
          <span
            className="mr-5 bg-[#dfecff] p-2 rounded-full hover:bg-tertiaryblue-50 hover:transition-all my-4 "
            id="rotate"
          >
            {props.children}
          </span>
          <h1 className="font-Heading text-2xl font-bold my-2">
            {props.title}
          </h1>
          <p className="text-center font-display my-2 mx-4">
            {props.info ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  Ut enim ad minim veniam, quis nostrud exercitation ullamco "}
          </p>
          <button className="text-tertiaryblue-50 font-bold font-Heading my-3">
            Read More
          </button>
        </div>

        <div className="bg-tertiaryblue-50 h-1 w-full absolute bottom-0 z-10  " id="bg"></div>
      </div>
    </>
  );
};
export default DepartmentCore;
