import AppointmentFormDetail from "./AppointmentFormDetail";
import PatientHeader from "../PatientHeader";
import AppointmentFormDate from "./AppointmentFormDate";
import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui";
import { useCallback } from "react";

export const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === "multilineTextEditor") {
    return null;
  }
  return <AppointmentForm.TextEditor {...props} />;
};

export const CommandLayout = (props) => {
  const CommandButton = useCallback(({ id, ...restProps }) => {
    if (id === "deleteButton") {
      return (
        <AppointmentForm.CommandButton
          id={id}
          {...restProps}
          disabled={false}
        />
      );
    }
    return <AppointmentForm.CommandButton id={id} {...restProps} />;

  }, []);
  console.log(props)
  return <AppointmentForm.CommandLayout commandButtonComponent={CommandButton} />
}

export const ReccurenceLayout = (props) => {
  return <AppointmentForm.RecurrenceLayout />
}

export const BasicLayout = ({
  onFieldChange,
  appointmentData,
  ...restProps
}) => {
  console.log(restProps);
  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ customField: nextValue });
  };

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label text="Patient Details" type="title" />
      <PatientHeader
        name={appointmentData?.title}
        age={appointmentData?.age}
        gender={appointmentData?.gender}
        profilePicture={appointmentData?.profilePicture}
      />
    </AppointmentForm.BasicLayout>
  );
};
export const Layout = (props) => {
  return (
    <AppointmentForm.Layout
      // appointmentData={appointmentData}
      // onFieldChange={onFieldChange}
      // {...restProps}
      basicLayoutComponent={BasicLayout}
      commandLayoutComponent={CommandLayout}
      recurrenceLayoutComponent={ReccurenceLayout}
      isRecurrence={false}

    >
    <div>Hi</div>
    </AppointmentForm.Layout>
  );
};

function CustomizedAppointmentForm(props) {
  const dateChangeHandler = () => {};

  //   return (
  //     <form className="w-full p-8 h-full flex flex-col space-y-10">
  //       <div className="flex justify-between">
  //         <button type="button">X</button>
  //         <button type="submit">Save</button>
  //       </div>
  //       <PatientHeader
  //         name={props?.name}
  //         age={props?.age}
  //         gender={props?.gender}
  //         profilePicture={props?.profilePicture}
  //       />
  //       <AppointmentFormDate
  //         startDate={props?.startDate}
  //         onDateChange={dateChangeHandler}
  //       />
  //       <div className="space-y-5">
  //         <AppointmentFormDetail title="Illness" description={props?.illness} />
  //         <AppointmentFormDetail
  //           title="Description"
  //           description={props?.illnessDescription}
  //         />
  //       </div>
  //       <button className="w-[20%]" type="button">
  //         View Patient History
  //       </button>
  //       <div className="flex flex-col">
  //         <label htmlFor="additional_notes">Additional Notes</label>
  //         <textarea
  //           id="additional_notes"
  //           value={props?.additionalNotes}
  //         ></textarea>
  //       </div>
  //     </form>
  //   );
}

export default CustomizedAppointmentForm;
