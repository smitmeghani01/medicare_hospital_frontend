import Department from "../../components/departments/Department";
import NavBar from "../../components/common/NavBar";
import styles from "../../styles/Home.module.css";
import Blog from "../../components/departments/Blog";
const Index = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className={`h-[700px] flex ${styles.department}`}>
        <div className="flex flex-col mt-[4%] ml-[10%] justify-center  ">
          <div className="font-Heading text-lg text-tertiaryblue-50 font-semibold">
            Departments
          </div>
          <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
            <span>Our Fields Of Expertise</span>
          </div>
          <div className="flex w-[60%] flex-wrap mt-8 font-Heading text-lg text-blackShade-50">
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
      <div className="my-5">
        <Department></Department>
      </div>
      <div className="my-5 flex mx-[10%]">
        <Blog></Blog>
      </div>
    </>
  );
};
export default Index;
