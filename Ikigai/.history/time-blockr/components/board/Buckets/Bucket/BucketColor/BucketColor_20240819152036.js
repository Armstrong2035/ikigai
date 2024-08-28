import { Stack } from "@mui/material";
import React, { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("");

  const colors = [
    "#87CEEB",
    "#98FF98",
    "#FF6F61",
    "#E6E6FA",
    "#FFD700",
    "#FF7F50",
    "#008080",
    "#708090",
    "#FF4500",
    "#228B22",
  ];

  return (
    <>
      <Stack>
        {colors.map((color) => (
          <Box sx={{ backgroundColor: `${color}` }}></Box>
        ))}
      </Stack>
    </>
  );
}
