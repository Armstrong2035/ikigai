import React from "react";
import { Grid, TextField } from "@mui/material";
export default function FrequencyInput({
  formData,
  handleFrequencyChange,
  error,
  textFieldStyles
}) {
  return (
    <>
      {formData.repeatEvery && (
        <Grid item xs={12} sm={6}>
          <TextField
            label={`Days per ${formData.repeatEvery.toLowerCase()}`}
            type="number"
            name="frequency"
            value={formData.frequency}
            onChange={handleFrequencyChange}
            sx={textFieldStyles}
            required
            fullWidth
            aria-required="true"
            inputProps={{
              min: 1,
              max: formData.repeatEvery === "Week" ? 7 : 31,
            }}
            error={
              !!error &&
              Object.keys(formData.checkedDays).length !== formData.frequency
            }
          />
        </Grid>
      )}
    </>
  );
}
