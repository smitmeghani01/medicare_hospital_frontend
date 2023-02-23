import AppointmentInfoCard from "../DoctorOverview/AppointmentInfoCard";
import AppointmentDetailsListItem from "./AppointmentDetailsListItem";
import GenericModal from "../common/GenericModal";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import AppointmentsContext from "../../store/Doctor/appointments-context";
import { v4 as uuidv4 } from "uuid";

// export const DUMMY_APPOINTMENTS = [
//   {
//     title: "Param Kothari",
//     profilePicture: "",
//     startDate: new Date(),
//     endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 10),
//     id: uuidv4(),
//     additionalNotes: "",
//     illness: "Fever",
//     illnessDescription: "",
//     medicalHistory: {},
//     location: "Room 2",
//     age: 15,
//     gender: "Male",
//     status: "Pending",
//     mode: "Online",
//     meetLink: "",
//   },
//   {
//     title: "Param Kothari",
//     profilePicture: "",
//     startDate: new Date(),
//     endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 10),
//     id: uuidv4(),
//     additionalNotes: "",
//     illness: "Fever",
//     illnessDescription: "",
//     medicalHistory: {},
//     location: "Room 2",
//     age: 15,
//     gender: "Male",
//     status: "Pending",
//     mode: "Online",
//     meetLink: "",
//   },
//   {
//     title: "Param Kothari",
//     profilePicture: "",
//     startDate: new Date(),
//     endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 10),
//     id: uuidv4(),
//     additionalNotes: "",
//     illness: "Fever",
//     illnessDescription: "",
//     medicalHistory: {},
//     location: "Room 2",
//     age: 15,
//     gender: "Male",
//     status: "Pending",
//     mode: "Online",
//     meetLink: "",
//   },
//   {
//     title: "Param Kothari",
//     profilePicture: "",
//     startDate: new Date(),
//     endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 10),
//     id: uuidv4(),
//     additionalNotes: "",
//     illness: "Fever",
//     illnessDescription: "",
//     medicalHistory: {},
//     location: "Room 2",
//     age: 15,
//     gender: "Male",
//     status: "Pending",
//     mode: "Online",
//     meetLink: "",
//   },
//   {
//     title: "Param Kothari",
//     profilePicture: "",
//     startDate: new Date(),
//     endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 10),
//     id: uuidv4(),
//     additionalNotes: "",
//     illness: "Fever",
//     illnessDescription: "",
//     medicalHistory: {},
//     location: "Room 2",
//     age: 15,
//     gender: "Male",
//     status: "Pending",
//     mode: "Online",
//     meetLink: "",
//   },
//   {
//     title: "Param Kothari",
//     profilePicture: "",
//     startDate: new Date(),
//     endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 10),
//     id: uuidv4(),
//     additionalNotes: "",
//     illness: "Fever",
//     illnessDescription: "",
//     medicalHistory: {},
//     location: "Room 2",
//     age: 15,
//     gender: "Male",
//     status: "Pending",
//     mode: "Online",
//     meetLink: "",
//   },
//   {
//     title: "Param Kothari",
//     profilePicture: "",
//     startDate: new Date(),
//     endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 10),
//     id: uuidv4(),
//     additionalNotes: "",
//     illness: "Fever",
//     illnessDescription: "",
//     medicalHistory: {},
//     location: "Room 2",
//     age: 15,
//     gender: "Male",
//     status: "Pending",
//     mode: "Online",
//     meetLink: "",
//   },
//   {
//     title: "Param Kothari",
//     profilePicture: "",
//     startDate: new Date(),
//     endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 10),
//     id: uuidv4(),
//     additionalNotes: "",
//     illness: "Fever",
//     illnessDescription: "",
//     medicalHistory: {},
//     location: "Room 2",
//     age: 15,
//     gender: "Male",
//     status: "Pending",
//     mode: "Online",
//     meetLink: "",
//   },
//   {
//     title: "Param Kothari",
//     profilePicture: "",
//     startDate: new Date(),
//     endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 10),
//     id: uuidv4(),
//     additionalNotes: "",
//     illness: "Fever",
//     illnessDescription: "",
//     medicalHistory: {},
//     location: "Room 2",
//     age: 15,
//     gender: "Male",
//     status: "Pending",
//     mode: "Online",
//     meetLink: "",
//   },
//   {
//     title: "Param Kothari",
//     profilePicture: "",
//     startDate: new Date(),
//     endDate: new Date(new Date().getTime() + 1000 * 60 * 60 * 10),
//     id: uuidv4(),
//     additionalNotes: "",
//     illness: "Fever",
//     illnessDescription: "",
//     medicalHistory: {},
//     location: "Room 2",
//     age: 15,
//     gender: "Male",
//     status: "Pending",
//     mode: "Online",
//     meetLink: "",
//   },
// ];

function AppointmentsInfo(props) {
  const Router = useRouter();
  const appointmentsCtx = useContext(AppointmentsContext);

  // const [appointments, setAppointments] = useState(DUMMY_APPOINTMENTS);
  const [isModalVisible, setIsModalVisible] = useState(true);
  // const [modalDetails, setModalDetails] = useState(null);

  const appointmentConfirmationHandler = (appointmentID) => {
    // setAppointments((prevAppointments) => {
    //   const requiredAppointment = appointmentsCtx.appointments.filter((appointment) => {
    //     return appointment.id === appointmentID;
    //   })[0];
    // //   const requiredAppointmentIndex =
    // //     prevAppointments.indexOf(requiredAppointment);
    //   const newAppointment = { ...requiredAppointment, status: "Confirmed" };
    //   const newAppointments = [...prevAppointments];
    //   newAppointments[requiredAppointmentIndex] = newAppointment;
    //   appointmentsCtx.addAppointment(newAppointment);
    //   return newAppointments;
    // });
    // appointmentsCtx.addAppointment(newAppointment);
    const requiredAppointment = appointmentsCtx.appointments.filter(
      (appointment) => {
        return appointment.appointment.id === appointmentID;
      }
    )[0].appointment;
    const newAppointment = { ...requiredAppointment };
    newAppointment.status = "Confirmed";
    appointmentsCtx.editAppointment(newAppointment);
  };

  const appointmentDeclinationHandler = (appointmentID) => {
    // setAppointments((prevAppointments) => {
    //   const requiredAppointment = prevAppointments.filter((appointment) => {
    //     return appointment.id === appointmentID;
    //   })[0];
    //   const requiredAppointmentIndex =
    //     prevAppointments.indexOf(requiredAppointment);
    //   const newAppointment = { ...requiredAppointment, status: "Rejected" };
    //   const newAppointments = [...prevAppointments];
    //   newAppointments[requiredAppointmentIndex] = newAppointment;
    //   return newAppointments;
    // });
    const requiredAppointment = appointmentsCtx.appointments.filter(
      (appointment) => {
        return appointment.appointment.id === appointmentID;
      }
    )[0].appointment;
    const newAppointment = { ...requiredAppointment };
    newAppointment.status = "Declined";
    appointmentsCtx.editAppointment(newAppointment);
  };

  const closeModalHandler = () => {
    setIsModalVisible(false);
    // setModalDetails(null);
  };

  const viewAppointmentDetailsHandler = (appointmentID) => {
    // setModalDetails(
    // )
    setIsModalVisible(true);
  };

  const appointmentDetails = appointmentsCtx.appointments
    ?.filter((item) => {
      return item?.appointment?.status === "Pending";
    })
    console.log(appointmentDetails)
  const pendingAppointments = appointmentDetails.map((appointment) => {
      console.log(appointment)
      const onButtonClick = {
        onConfirmAppointment: appointmentConfirmationHandler.bind(
          this,
          appointment.id
        ),
        onDeclineAppointment: appointmentDeclinationHandler.bind(
          this,
          appointment.id
        ),
      };
      return (
        <AppointmentDetailsListItem
          key={appointment?.appointment?.id}
          id={appointment?.appointment?.id}
          name={appointment?.patientData?.name}
          profilePicture={appointment?.patientData?.image}
          date={appointment?.appointment?.slot?.date}
          time={appointment?.appointment?.slot.start_time}
          status={appointment?.appointment?.status}
          gender={appointment?.patientData?.gender}
          {...onButtonClick}
          onAppointmentClick={viewAppointmentDetailsHandler}
        />
      );
    });

  const viewAllAppointmentsHandler = () => {
    Router.push("/doctor/appointments");
  };

  return (
    <>
      {/* {isModalVisible && modalDetails} */}

      {/* <GenericModal title = "Appointment Details" 
            closeHandler = {closeModalHandler}
            isStepModal = {false}
            posText = "Confirm"
            posHandler = {appointmentConfirmationHandler.bind(this)}
            negText = "Decline"
            negHandler = {appointmentDeclinationHandler}>
                <AppointmentDetailsModal name = "Param Kothari"
                    age = "22"
                    gender = "Male"
                    mode = "Video Conferencing"
                    illness = "Fever"
                    description = "Mild headache, cold, cough"
                    date = "10 October"
                    time = "10:30 AM"
                />
            </GenericModal> */}
      <AppointmentInfoCard
        className="h-[500px] py-4 overflow-y-auto "
        header="Appointment Requests"
        action={
          <button
            className="text-[13.5px] text-cyan-400 hover:text-indigo-500"
            onClick={viewAllAppointmentsHandler}
          >
            View All {">"}
          </button>
        }
      >
        <ul className="w-[100%] flex flex-col">
          {pendingAppointments}
        </ul>
      </AppointmentInfoCard>
    </>
  );
}

export default AppointmentsInfo;
