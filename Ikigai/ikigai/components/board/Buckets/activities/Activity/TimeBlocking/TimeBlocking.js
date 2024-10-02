import React, { useState, forwardRef } from "react";
import { Box, Tab } from "@mui/material";

import RecurringTimeblock from "./RecurringTimeblock";

export default function TimeBlock({ activity }) {
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <RecurringTimeblock activity={activity} />
    </Box>
  );
}
