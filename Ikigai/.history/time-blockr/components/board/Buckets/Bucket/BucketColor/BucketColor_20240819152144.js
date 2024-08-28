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

  const handleColorClick = (color) => {
    setSelectedColor(color);
    onSelect(color); // Callback to handle the color selection
  };

  return (
    <>
      <Stack>
        {colors.map((color) => (
          <Box
            key={color}
            onClick={() => handleColorClick(color)}
            sx={{
              width: 30,
              height: 30,
              backgroundColor: color,
              border: selectedColor === color ? "2px solid black" : "none",
              cursor: "pointer",
            }}
          ></Box>
        ))}
      </Stack>
    </>
  );
}
