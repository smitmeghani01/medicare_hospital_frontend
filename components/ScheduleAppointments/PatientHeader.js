function PatientHeader(props) {
  return (
    <div className="flex space-x-5 items-center">
      <div className="h-[85px] w-[85px] rounded-full">
        <img
          className="h-[100%] w-[100%] rounded-full object-cover object-center"
          src={
            props.profilePicture ||
            "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
          }
        />
      </div>
      <div>
        <h2 className="font-semibold text-xl">{props.name}</h2>
        <p className="text-gray-500 ">{`${props.age}, ${props.gender}`}</p>
      </div>
    </div>
  );
}

export default PatientHeader;
