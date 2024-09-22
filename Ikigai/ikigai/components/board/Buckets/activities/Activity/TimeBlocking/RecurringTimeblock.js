import { FormGroup, TextField, RadioGroup, FormControlLabel, Radio, Grid, Stack, Icon, IconButton, Typography, Button, InputLabel } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import React, {useState} from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function RecurringTimeblock({styles}) {
    const [formData, setFormData] = useState({
        name: '',
        repeatEvery: '',
        checkedDays: {},
        startTime: dayjs('2022-04-17T15:30'),
        endTime: dayjs('2022-04-17T15:30')
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRepeatEveryChange = (value) => { 
        setFormData({ ...formData, repeatEvery: value });
    };

    const handleDayToggle = (day) => {
        setFormData(prevState => ({
            ...prevState,
            checkedDays: { ...prevState.checkedDays, [day]: !prevState.checkedDays[day] }
        }));
    };

    const handleStartTimeChange = (time) => {
        setFormData({...formData, startTime: time})
    }

    const handleEndTimeChange = (time) => {
        setFormData({...formData, endTime: time})
    }

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    console.log(formData)

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container direction='row' alignItems={'center'} spacing={3} justifyContent={'flex-start'}>
                <Grid item lg={6} sm={12} xs={12}>         
                    <TextField 
                        label={'X days per'} 
                        type={'number'} 
                        name="name"
                        onChange={handleInputChange}
                        sx={{ borderColor: 'white', color: 'white', '& .MuiInputBase-root': { borderColor: 'white' }, '& .MuiInputLabel-root': { color: 'white' } }}
                    />
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>         
                    <RadioGroup>
                        <Stack direction='row'>               
                            <FormControlLabel 
                                value='Month' 
                                onClick={() => handleRepeatEveryChange('Month')} 
                                control={<Radio sx={{ color: 'white', '&.Mui-checked': { color: '#CBD6D6' } }} />} 
                                label={<span style={{ color: 'white' }}>Month</span>} 
                            />
                            <FormControlLabel 
                                value='Week' 
                                onClick={() => handleRepeatEveryChange('Week')} 
                                control={<Radio sx={{ color: '#CBD6D6', '&.Mui-checked': { color: '#CBD6D6' } }} />} 
                                label={<span style={{ color: '#CBD6D6' }}>Week</span>} 
                            />  
                        </Stack>
                    </RadioGroup> 
                </Grid>

                <Grid item>
                    <Grid container direction='row' spacing={3}>
                        {daysOfWeek.map((day) => (
                            <Grid item sm={4} lg={1.5} style={{ display: 'flex', justifyContent: 'center' }} key={day}>
                                <Button 
                                    variant='contained' 
                                    size={'small'}
                                    color={formData.checkedDays[day] ? 'success' : 'secondary'} 
                                    onClick={() => handleDayToggle(day)}
                                >
                                    {day.substring(0, 3)}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                <Grid item>
                    <Stack spacing={2}>
                        <TimePicker 
                            label={'Start time'}
                            value={formData.startTime}
                            onChange={(newValue) => handleStartTimeChange(newValue) }
                            sx={{ borderColor: '#CBD6D6', color: '#CBD6D6', '& .MuiInputBase-root': { borderColor: '#CBD6D6' }, '& .MuiInputLabel-root': { color: '#CBD6D6' } }}
                        />
                        <TimePicker
                            label={'End time'}
                            value={formData.endTime}
                            onChange={(newValue) => handleEndTimeChange(newValue)}
                            sx={{ borderColor: '#CBD6D6', color: '#CBD6D6', '& .MuiInputBase-root': { borderColor: '#CBD6D6' }, '& .MuiInputLabel-root': { color: '#CBD6D6' } }}
                        />
                    </Stack>
                    
                </Grid>
            </Grid>
        </LocalizationProvider>
    );
}