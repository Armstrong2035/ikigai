import React, { useState, useMemo, useCallback } from "react";
import { FormGroup, TextField, RadioGroup, FormControlLabel, Radio, Grid, Stack, Typography, Button, InputLabel, FormHelperText } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { textFieldStyles } from "../../../../../../utils/muiStyles";
import boardStore from "../../../../store";

export default function ImprovedRecurringTimeblock({ styles, activity }) {
  const addTimeBlock = boardStore((state) => state.addTimeBlock);
  const timeblocks = boardStore((state) => state.timeblocks);

  const [formData, setFormData] = useState({
    activityId: activity.id,
    name: '',
    repeatEvery: '',
    frequency: 1,
    checkedDays: {},
    startTime: dayjs(),
    endTime: dayjs().add(1, 'hour'),
    color: '#000000'
  });

  console.log(timeblocks)

  const [error, setError] = useState('');

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  }, []);

  const handleRepeatEveryChange = useCallback((value) => {
    setFormData(prevData => ({ 
      ...prevData, 
      repeatEvery: value, 
      frequency: 1, 
      checkedDays: {} 
    }));
  }, []);

  const handleFrequencyChange = useCallback((e) => {
    const value = parseInt(e.target.value);
    setFormData(prevData => {
      const maxFrequency = prevData.repeatEvery === 'Week' ? 7 : 31;
      const newFrequency = Math.min(Math.max(1, value), maxFrequency);
      const newCheckedDays = Object.fromEntries(
        Object.entries(prevData.checkedDays).slice(0, newFrequency)
      );
      return { ...prevData, frequency: newFrequency, checkedDays: newCheckedDays };
    });
  }, []);

  const handleDayToggle = useCallback((day) => {
    setFormData(prevData => {
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
    setFormData(prevData => ({ ...prevData, startTime: time }));
  }, []);

  const handleEndTimeChange = useCallback((time) => {
    setFormData(prevData => ({ ...prevData, endTime: time }));
  }, []);

  const handleColorChange = useCallback((color) => {
    setFormData(prevData => ({ ...prevData, color: color }));
  }, []);

  const validateTimeblock = useCallback(() => {
    if (!formData.name) {
      setError('Please enter a name for the timeblock');
    } else if (!formData.repeatEvery) {
      setError('Please select a repeat frequency');
    } else if (Object.keys(formData.checkedDays).length !== formData.frequency) {
      setError(`Please select exactly ${formData.frequency} day(s)`);
    } else if (!formData.color) {
      setError('Please select a color for the timeblock');
    } else {
      addTimeBlock(activity.id, formData);
      setError('');
    }
  }, [formData, activity.id, addTimeBlock]);

  const daysOfWeek = useMemo(() => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], []);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <FormGroup aria-label="recurring timeblock form">
        <Grid container direction='row' alignItems='center' spacing={3} justifyContent='flex-start'>
          <Grid item xs={12}>
            <TextField
              label='Timeblock Name'
              type='text'
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              sx={textFieldStyles}
              required
              aria-required="true"
              error={!!error && !formData.name}
            />
          </Grid>
          <Grid item xs={12}>
            <RadioGroup 
              required 
              aria-label="repeat frequency" 
              name="repeatEvery"
              value={formData.repeatEvery}
              onChange={(e) => handleRepeatEveryChange(e.target.value)}
            >
              <Stack direction='row'>
                <FormControlLabel
                  value='Month'
                  control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#CBD6D6' } }} />}
                  label={<span style={{ color: 'white' }}>Month</span>}
                />
                <FormControlLabel
                  value='Week'
                  control={<Radio sx={{ color: '#CBD6D6', '&.Mui-checked': { color: '#CBD6D6' } }} />}
                  label={<span style={{ color: '#CBD6D6' }}>Week</span>}
                />
              </Stack>
            </RadioGroup>
          </Grid>

          {formData.repeatEvery && (
            <Grid item xs={12} sm={6}>
              <TextField
                label={`Days per ${formData.repeatEvery.toLowerCase()}`}
                type='number'
                name="frequency"
                value={formData.frequency}
                onChange={handleFrequencyChange}
                sx={textFieldStyles}
                required
                fullWidth
                aria-required="true"
                inputProps={{
                  min: 1,
                  max: formData.repeatEvery === 'Week' ? 7 : 31
                }}
                error={!!error && Object.keys(formData.checkedDays).length !== formData.frequency}
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <InputLabel id="days-of-week-label" sx={{ color: '#CBD6D6', marginBottom: '8px' }}>Select Days</InputLabel>
            <Grid container direction='row' spacing={3}>
              {daysOfWeek.map((day) => (
                <Grid item xs={6} sm={4} md={3} lg={1.5} style={{ display: 'flex', justifyContent: 'center' }} key={day}>
                  <Button
                    variant='contained'
                    size='small'
                    color={formData.checkedDays[day] ? 'success' : 'secondary'}
                    onClick={() => handleDayToggle(day)}
                    aria-label={`Select ${day}`}
                    aria-pressed={formData.checkedDays[day]}
                    disabled={!formData.checkedDays[day] && Object.keys(formData.checkedDays).length >= formData.frequency}
                  >
                    {day.substring(0, 3)}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack spacing={2}>
              <TimePicker
                label='Start time'
                value={formData.startTime}
                onChange={handleStartTimeChange}
                sx={textFieldStyles}
                required
                aria-required="true"
              />
              <TimePicker
                label='End time'
                value={formData.endTime}
                onChange={handleEndTimeChange}
                sx={textFieldStyles}
                required
                aria-required="true"
              />
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} container spacing={2} direction='row' alignItems='center'>
            <Grid item>
              <Typography sx={{ color: '#CBD6D6' }}>Select a color for this timeblock:</Typography>
            </Grid>
            <Grid item>
              <input
                type="color"
                name="time-block-color"
                value={formData.color}
                onChange={(e) => handleColorChange(e.target.value)}
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  padding: '0', 
                  border: '2px solid #CBD6D6',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
                aria-label="Choose timeblock color"
                required
              />
            </Grid>
          </Grid>

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