import React, { useState, useMemo, useCallback } from "react";
import {
  FormGroup,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Stack,
  Typography,
  Button,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { textFieldStyles } from "../../../../../../utils/muiStyles";
import boardStore from "../../../../store";
import RepeatFrequencySelector from "./components/RepeatFrequencySelector";
import { FreeBreakfast } from "@mui/icons-material";
import FrequencyInput from "./components/FrequencyInput";
import DaySelector from "./components/DaySelector";
import TimeSelector from "./components/TimeSelector";
import ColorSelector from "./components/ColorSelector";

export default function RecurringTimeblock({ styles, activity }) {
  const addTimeBlock = boardStore((state) => state.addTimeBlock);
  const timeblocks = boardStore((state) => state.timeblocks);
  const currentTimeblock = timeblocks.map((timeblock) => {
    if (timeblock.id === activity.id) {
      return timeblock;
    } else {
      return null;
    }
  });
  const updateTimeBlock = boardStore((state) => state.updateTimeBlock)

  console.log(currentTimeblock);

  const [formData, setFormData] = useState({
    activityId: activity.id,
    name: activity.title,
    repeatEvery: "",
    frequency: 1,
    checkedDays: {},
    startTime: dayjs(),
    endTime: dayjs().add(1, "hour"),
    color: "#000000",
  });

  console.log(timeblocks);

  const [error, setError] = useState("");

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleRepeatEveryChange = useCallback((value) => {
    setFormData((prevData) => ({
      ...prevData,
      repeatEvery: value,
      frequency: 1,
      checkedDays: {},
    }));
  }, []);

  const handleFrequencyChange = useCallback((e) => {
    const value = parseInt(e.target.value);
    setFormData((prevData) => {
      const maxFrequency = prevData.repeatEvery === "Week" ? 7 : 31;
      const newFrequency = Math.min(Math.max(1, value), maxFrequency);
      const newCheckedDays = Object.fromEntries(
        Object.entries(prevData.checkedDays).slice(0, newFrequency)
      );
      return {
        ...prevData,
        frequency: newFrequency,
        checkedDays: newCheckedDays,
      };
    });
  }, []);

  const handleDayToggle = useCallback((day) => {
    setFormData((prevData) => {
      const newCheckedDays = { ...prevData.checkedDays };
      if (newCheckedDays[day]) {
        delete newCheckedDays[day];
      } else if (Object.keys(newCheckedDays).length < prevData.frequency) {
        newCheckedDays[day] = true;
      }
      return { ...prevData, checkedDays: newCheckedDays };
    });
  }, []);

  const handleStartTimeChange = useCallback((time) => {
    setFormData((prevData) => ({ ...prevData, startTime: time }));
  }, []);

  const handleEndTimeChange = useCallback((time) => {
    setFormData((prevData) => ({ ...prevData, endTime: time }));
  }, []);

  const handleColorChange = useCallback((color) => {
    setFormData((prevData) => ({ ...prevData, color: color }));
  }, []);

  const validateTimeblock = useCallback(() => {
    const exists = timeblocks.some((tb) => tb.activityId === activity.id);
    if (exists) {
      // setError("A timeblock for this activity already exists");
      // return; // Exit if a timeblock already exists
      updateTimeBlock(activity.id, formData)
    }
    if (!formData.name) {
      setError("Please enter a name for the timeblock");
    } else if (!formData.repeatEvery) {
      setError("Please select a repeat frequency");
    } else if (
      Object.keys(formData.checkedDays).length !== formData.frequency
    ) {
      setError(`Please select exactly ${formData.frequency} day(s)`);
    } else if (!formData.color) {
      setError("Please select a color for the timeblock");
    } else {
      addTimeBlock(activity.id, formData);
      setError("");
    }
  }, [formData, activity.id, addTimeBlock]);

  const daysOfWeek = useMemo(
    () => [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    []
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormGroup aria-label="recurring timeblock form">
        <Grid
          container
          direction="row"
          alignItems="center"
          spacing={3}
          justifyContent="flex-start"
        >
          <Grid item xs={12}>
            <TextField
              label={activity.title}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              sx={textFieldStyles}
              required
              aria-required="true"
              error={!!error && !formData.name}
            />
            <RepeatFrequencySelector
              formData={formData}
              handleRepeatEveryChange={handleRepeatEveryChange}
              currentTimeblock={currentTimeblock}
            />
            <FrequencyInput
              formData={formData}
              handleFrequencyChange={handleFrequencyChange}
              currentTimeblock={currentTimeblock}
              error={
                !!error &&
                Object.keys(formData.checkedDays).length !== formData.frequency
              }
              textFieldStyles={textFieldStyles}
            />
          </Grid>

          <DaySelector
            formData={formData}
            daysOfWeek={daysOfWeek}
            handleDayToggle={handleDayToggle}
          />

          <TimeSelector
            textFieldStyles={textFieldStyles}
            formData={formData}
            handleEndTimeChange={handleEndTimeChange}
            handleStartTimeChange={handleStartTimeChange}
          />

          <ColorSelector
            handleColorChange={handleColorChange}
            formData={formData}
            currentTimeblock={currentTimeblock}
          />

          <Grid item xs={12}>
            <Button
              onClick={validateTimeblock}
              variant="contained"
              color="primary"
              aria-label="Save timeblock"
            >
              Save
            </Button>
            {error && <FormHelperText error>{error}</FormHelperText>}
          </Grid>
        </Grid>
      </FormGroup>
    </LocalizationProvider>
  );
}
