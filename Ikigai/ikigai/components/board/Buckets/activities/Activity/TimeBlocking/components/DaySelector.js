import { Grid, InputLabel, Button } from "@mui/material";
export default function DaySelector({ daysOfWeek, handleDayToggle, formData }) {
  return (
    <>
      <Grid item xs={12}>
        <InputLabel
          id="days-of-week-label"
          sx={{ color: "#CBD6D6", marginBottom: "8px" }}
        >
          Select Days
        </InputLabel>
        <Grid container direction="row" spacing={3}>
          {daysOfWeek.map((day) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              lg={1.5}
              style={{ display: "flex", justifyContent: "center" }}
              key={day}
            >
              <Button
                variant="contained"
                size="small"
                color={formData.checkedDays[day] ? "success" : "secondary"}
                onClick={() => handleDayToggle(day)}
                aria-label={`Select ${day}`}
                aria-pressed={formData.checkedDays[day]}
                disabled={
                  !formData.checkedDays[day] &&
                  Object.keys(formData.checkedDays).length >= formData.frequency
                }
              >
                {day.substring(0, 3)}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
