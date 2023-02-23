import React, { useReducer, useContext, useEffect, useCallback } from "react";
import axios from "axios";
import AuthContext from "../auth-context";

const defaultAppointmentsState = [];

const AppointmentsContext = React.createContext({
  appointments: defaultAppointmentsState,
  addAppointment: (appointment) => {},
  editAppointment: (appointmentID) => {},
  deleteAppointment: (appointmentID) => {},
});

export default AppointmentsContext;

function appointmentsReducer(state, action) {
  if (action.type === "SET_APPOINTMENTS") {
    console.log(action.value)
    return action.value;
  }
  if (action.type === "ADD_APPOINTMENT") {
    const newAppointments = state.concat(action.value);
    return newAppointments;
  }
  if (action.type === "DELETE_APPOINTMENT") {
    const newAppointments = state.filter((appointment) => {
      return appointment.id !== action.value;
    });
    return newAppointments;
  }
  if (action.type === "EDIT APPOINTMENT") {
    const appointmentIndex = state.findIndex((appointment) => {
      return appointment.id === action.value.appointment.id;
    });
    const newAppointments = [...state];
    const newAppointment = { ...action.value.appointment };
    newAppointments[appointmentIndex] = newAppointment;
    return newAppointments;
  }
  return defaultAppointmentsState;
}

export function AppointmentContextProvider(props) {
  const [appointmentsState, appointmentsDispatchFunction] = useReducer(
    appointmentsReducer,
    defaultAppointmentsState
  );

  const authCtx = useContext(AuthContext);

  const fetchAppointmentsHandler = useCallback(async () => {
    const appointmentsData = await axios.get(
      `https://hm-project-finalbackend.herokuapp.com/api/appointments/doctor-appointment-list/${authCtx.id}`
    );
    appointmentsDispatchFunction({
      type: "SET_APPOINTMENTS",
      value: appointmentsData?.data?.appointments,
    });
  }, [authCtx.id]);

  const addAppointmentHandler = async (appointment) => {
    const newAppointment = await axios.post(
      "https://hm-project-finalbackend.herokuapp.com/api/appointments",
      {
        appointment: appointment,
      }
    );
    appointmentsDispatchFunction({
      type: "ADD_APPOINTMENT",
      value: newAppointment?.data,
    });
  };

  const deleteAppointmentHandler = (appointmentID) => {
    appointmentsDispatchFunction({
      type: "DELETE_APPOINTMENT",
      value: appointmentID,
    });
  };

  const editAppointmentHandler = async (appointment) => {
    const editedAppointment = await axios.patch(`https://hm-project-finalbackend.herokuapp.com/api/appointments/${appointment.id}`, {
      appointment: appointment,
    });
    appointmentsDispatchFunction({
      type: "EDIT_APPOINTMENT",
      value: editedAppointment?.result?.data?.appointment,
    });
  };

  // const confirmAppointmentHandler = async (appointmentToBeConfirmed) => {
    
  //   appointmentsDispatchFunction({
  //     type: "EDIT_APPOINTMENT",
  //     value: appointment,
  //   });
  // };

  const appointmentsCtx = {
    appointments: appointmentsState,
    addAppointment: addAppointmentHandler,
    deleteAppointment: deleteAppointmentHandler,
    editAppointment: editAppointmentHandler,
  };

  useEffect(() => {
    fetchAppointmentsHandler();
  }, []);

  return (
    <AppointmentsContext.Provider value={appointmentsCtx}>
      {props.children}
    </AppointmentsContext.Provider>
  );
}
