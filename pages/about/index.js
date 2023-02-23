import NavBar from "../../components/common/NavBar";
import About from "../../components/about/About";
import Medic from "../../components/common/icons/Medic";
import Doctor from "../../components/common/icons/Doctor";
import styles from "../../styles/Home.module.css";
import Information from "../../components/about/Information";
import Choose from "../../components/about/Choose";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
const Index = () => {
  const ctx=useContext(AuthContext)
  console.log(ctx.token,ctx.id)
  return (
    <>
      <NavBar></NavBar>
      <div className={`h-[700px] flex ${styles.about} bg-opacity-30`}>
        <div className="flex flex-col mt-[8%] ml-[10%] justify-center   ">
          <div className="font-Heading text-lg text-tertiaryblue-50 font-semibold" role="heading">
            About Us
          </div>
          <div className="flex flex-col mt-5 font-display text-5xl font-extrabold space-y-5">
            <span>Learn the Ways of Medicare</span>
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
      <div className="ml-[10%] mt-5">
        <About show={true} text="Departments">
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
      </div>
      <div className="flex justify-center  mt-5 w-full ">
        <Choose></Choose>
      </div>
    </>
  );
};
export default Index;
