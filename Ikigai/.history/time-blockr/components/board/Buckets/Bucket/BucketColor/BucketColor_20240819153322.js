import { Stack, Box } from "@mui/material";
import React, { useState } from "react";
import { useStore } from "zustand";
import boardStore from "../../../store";

export default function ColorPicker() {
  const updateBucketColor = boardStore((state) => state.updateBucketColor);

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
    updateBucketColor(bucketId, color); // Update the bucket color in Zustand store
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
