import AppointmentsTodayListItem from "./AppointmentsTodayListItem";
import AppointmentInfoCard from "./AppointmentInfoCard";
import { useContext, useEffect, useState, useCallback } from "react";
import AuthContext from "../../store/auth-context";
import axios from "axios";

const DUMMY_APPOINTMENTS = [
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 1,
  },
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 2,
  },
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 3,
  },
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 4,
  },
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 5,
  },
  {
    name: "Param Kothari",
    time: "9:30 AM",
    description: "Emergency",
    profilePicture: "",
    id: 6,
  },
];

function AppointmentsToday(props) {
  const [appointmentsToday, setAppointmentsToday] = useState([]);
  const authCtx = useContext(AuthContext);

  const fetchUpcomingAppointmentsHandler = useCallback(async () => {
    const appointmentsData = await axios.get(
      `https://hm-project-finalbackend.herokuapp.com/api/appointments/doctor-upcoming-appointment-list/${authCtx.id}`
    );
    console.log(appointmentsData)
    const currentDate = new Date();
    const requiredAppointments = appointmentsData?.data?.appointments?.filter((item) => {
      return item?.appointment?.slot?.date === currentDate;
    });
    setAppointmentsToday(requiredAppointments);
  }, [authCtx.id]);

  const appointments = appointmentsToday.map((appointment) => {
    return (
      <AppointmentsTodayListItem
        key={appointment.appointment.id}
        id={appointment.appointment.id}
        name={appointment.patientData.name}
        time={appointment.appointment.slot.start_time}
        description={appointment.appointment.illness}
        profilePicture={appointment.patientData.image}
      />
    );
  });


  useEffect(() => {
    fetchUpcomingAppointmentsHandler();
  }, []);

  return (
    <AppointmentInfoCard className="h-[500px]" header="Appointments Today">
      <ul className="w-[100%] flex flex-col justify-center">{appointments}</ul>
    </AppointmentInfoCard>
  );
}

export default AppointmentsToday;
