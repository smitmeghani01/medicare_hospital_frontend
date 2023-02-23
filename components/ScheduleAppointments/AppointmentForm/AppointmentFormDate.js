import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment"
import  {LocalizationProvider}  from "@mui/x-date-pickers/LocalizationProvider";
import { TextField } from "@mui/material";
import { useState } from "react";

function AppointmentFormDate(props) {
  const [date, setDate] = useState(props.startDate);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label="Edit date"
        value={date}
        onChange={(newDate) => {
          setDate(newDate);
          props.onDateChange(newDate);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default AppointmentFormDate;
