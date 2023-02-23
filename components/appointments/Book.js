import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment"
import  {LocalizationProvider}  from "@mui/x-date-pickers/LocalizationProvider";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import moment from 'moment';

const Book = (props) => {
  const [value, setValue] = useState(moment());
  const [unAvailable,setUnavailable]=useState(false)
  useEffect(()=>{
 
    props.dateHandler(value.toDate())

  },[value])
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker
        label="Select date"
        value={value}
        disablePast={true}
        disableHighlightToday={true}
        closeOnSelect={true}
        minDate={moment()}
        maxDate={moment().add(7,'days')}
        className="bg-slate-100 border-4 border-black rounded-lg  text-base font-bold "
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      {unAvailable && <p className='text-sm text-red-600'>Please select a date within 7 days from today  </p>}
    </LocalizationProvider>
  );
};
export default Book;
