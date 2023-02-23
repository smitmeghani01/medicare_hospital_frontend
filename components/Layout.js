import Sidebar from "./common/Sidebar/Sidebar";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { AppointmentContextProvider } from "../store/Doctor/appointments-context";
import SearchBar from "./common/SearchBar";
import axios from "axios";

function Layout(props) {
  const authCtx = useContext(AuthContext);
  const [doctorDetails, setDoctorDetails] = useState(null);

  useEffect(() => {
    const getDoctorDetails = async () => {
      const doctor = await axios.get(
        `https://hm-project-finalbackend.herokuapp.com/api/doctors/${authCtx?.id}`
      );
      setDoctorDetails(doctor?.data?.doctor);
    };
    if (authCtx.userType === "Doctor") {
      getDoctorDetails();
    }
  }, []);
  return (
    <>
      {authCtx.userType === "Doctor" ? (
        <AppointmentContextProvider>
          <div className="flex min-h-screen ">
            <Sidebar />
            <div className="flex-grow overflow-y-auto h-screen px-10 w-[100%] bg-gray-100 pb-10 flex flex-col space-y-4">
              <SearchBar />
              {props.children}
            </div>
          </div>
        </AppointmentContextProvider>
      ) : (
        props?.children
      )}
    </>
  );
}

export default Layout;
