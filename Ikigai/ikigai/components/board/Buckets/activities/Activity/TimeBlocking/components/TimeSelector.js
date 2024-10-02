import React from "react";
import { Grid, Stack } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";

export default function TimeSelector({
  formData,
  handleEndTimeChange,
  handleStartTimeChange,
  textFieldStyles,
}) {
  return (
    <Grid item xs={12} sm={6}>
      <Stack spacing={2}>
        <TimePicker
          label="Start time"
          value={formData.startTime}
          onChange={handleStartTimeChange}
          sx={textFieldStyles}
          required
          aria-required="true"
        />
        <TimePicker
          label="End time"
          value={formData.endTime}
          onChange={handleEndTimeChange}
          sx={textFieldStyles}
          required
          aria-required="true"
        />
      </Stack>
    </Grid>
  );
}
