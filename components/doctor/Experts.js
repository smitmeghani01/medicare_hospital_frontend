import DoctorCard from "./DoctorCard";
const Experts = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col w-[100%] items-center">
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
      <div className="my-10 flex space-x-10 justify-center w-full ">
        <DoctorCard
          image="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          name="Dr. Anthony"
          expertise="Surgeon , Cardiologist"
          preview={true}
        ></DoctorCard>
        <DoctorCard
          image="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Dr. Anna"
          expertise="Internist, General Practitioner"
          preview={true}
        ></DoctorCard>
        <DoctorCard
          image="https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          name="Dr. Andrew"
          expertise="Internist, Orthopedic Surgeon"
          preview={true}
        ></DoctorCard>
      </div>
    </div>
  );
};
export default Experts;
