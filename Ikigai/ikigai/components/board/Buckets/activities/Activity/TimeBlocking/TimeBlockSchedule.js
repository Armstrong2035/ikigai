import { FormGroup, Tab, Tabs } from "@mui/material"
import React, {useState} from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import RecurringTimeblock from "./RecurringTimeblock";
import OneTimeTimeBlock from "./OneTimeTimeblock";
import { TabList } from "@mui/lab";

export default function TimeBlockSchedule(){
    const [timeBlock, setTimeBlock] = useState({})
    return (
           <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               
                <Tabs label='Recurring'>
                    <Tab label='Recurring' value={<RecurringTimeblock/>} />                           
                    <Tab label='One time' value={<OneTimeTimeBlock />} />                 
                </Tabs>
            </LocalizationProvider>

        </>

    )
}