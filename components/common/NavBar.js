import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import AuthContext from "../../store/auth-context";
const NavBar = (props) => {
  const authCtx =useContext(AuthContext)
  const router = useRouter();
  console.log(router);
  const [showFac, setShowFac] = useState(false);
  const facilities = (
    <div
      className="border-t-2 border-tertiaryblue-50 flex flex-col absolute bg-tertiarywhite-50 top-19 rounded-sm mt-2 w-[200px]"
      id="item"
    >
      <Link href="/doctors">
        <a className="py-2 border-b-2 border-tertiarygrey-500 font font-bold text-sm font-display w-full px-5">
          Doctors
        </a>
      </Link>
      <Link href="/ambulance">
        <a className="py-2 border-b-2 border-tertiarygrey-500 font font-bold text-sm px-5 font-display">
          Ambulance
        </a>
      </Link>
    </div>
  );
  return (
    <div className="flex w-full">
      <div className="w-[25%] flex items-center space-x-6 bg-tertiaryblue-50 px-14 py-3 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
          width="50"
          height="50"
        >
          <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zM112 144c0-8.8 7.2-16 16-16h48V80c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H240v48c0 8.8-7.2 16-16 16H192c-8.8 0-16-7.2-16-16V192H128c-8.8 0-16-7.2-16-16V144z" />
        </svg>
        <h1 className="text-3xl font-bold text-tertiarywhite-100 " id="nav">
          MediCare
        </h1>
      </div>
      <div className="w-[2%] bg-tertiaryblue-50 " id="border"></div>
      <div className="font-display flex w-[50%] space-x-10 bg-tertiarywhite-50">
        <ul
          className="flex list-none space-x-20 items-center  px-10 text-[15px] f font-semibold w-[100%] font-Heading"
          id="links"
        >
          <li onMouseOver={()=>setShowFac(false)}>
            <Link href="/patient" >
              <a className={router.pathname == "/patient" ? "active" : ""} role="Navlink">
                Home
              </a>
            </Link>
          </li>
          <li onMouseOver={()=>setShowFac(false)}>
            <Link href={"/about"}>
              <a className={router.pathname == "/about" ? "active" : ""}  role="Navlink">
                About Us
              </a>
            </Link>
          </li>
          <li>
            {" "}
            <span className="cursor-pointer " id="fac" onMouseOver={()=>setShowFac(true)}  role="Navlink">
              <p>Facilities </p>
              {showFac && facilities}
            </span>
          </li>

          <li onMouseOver={()=>setShowFac(false)}>
            {" "}
            <Link href="/department">
              <a className={router.pathname == "/department" ? "active" : ""}  role="Navlink">
                Departments
              </a>
            </Link>
          </li>

          <li onMouseOver={()=>setShowFac(false)}>
            <Link href="/profile" >
              <a className={router.pathname == "/profile" ? "active" : ""}  role="Navlink">
                Profile
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[23%] flex items-center justify-center bg-tertiarywhite-50 space-x-10" onMouseOver={()=>setShowFac(false)}>
        <button className=" w-[40%] text-tertiarywhite-100 bg-tertiaryblue-50 font-Heading text-lg font-semibold rounded-md px-2 py-2 " onClick={()=>router.push(`/doctors`)}>
          Book Now
        </button>
        <button className=" w-[40%] bg-tertiarygrey-200 text-tertiaryblue-50 font-Heading text-lg font-semibold rounded-md px-2 py-2 " onClick={()=>authCtx.onLogout()}>
          Logout
        </button>
      </div>
    </div>
  );
};
export default NavBar;
