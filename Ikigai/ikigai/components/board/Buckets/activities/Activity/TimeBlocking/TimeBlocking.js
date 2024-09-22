import React, { useState, forwardRef } from "react";
import TimeBlockSchedule from "./TimeBlockSchedule";
import { Box, Tab } from "@mui/material";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import RecurringTimeblock from "./RecurringTimeblock";
import OneTimeTimeBlock from "./OneTimeTimeblock";

const TimeBlock = ({styles}) => {
    const [color, setColor] = useState('')
    const [notification, setNotification] = useState(false)
    const [addToCalendar, setAddToCalendar] = useState(false)
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="Switch between recurring and one time ">
              <Tab label="Recurring" value="1" />
              <Tab label="One time" value="" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <RecurringTimeblock styles={styles}/>
          </TabPanel>
          <TabPanel value="2">
            <OneTimeTimeBlock styles={styles}/>
          </TabPanel>
        </TabContext>
      </Box>
    );
};

export default TimeBlock;