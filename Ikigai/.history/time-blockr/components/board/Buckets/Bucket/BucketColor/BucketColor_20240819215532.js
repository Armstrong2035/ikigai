import { Stack, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useStore } from "zustand";
import boardStore from "../../../store";

export default function ColorPicker({ bucketId }) {
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
    <FormControl>
      <InputLabel>Background Color</InputLabel>
      <Select value={age} label="Age">
        {colors.map((color) => (
          <MenuItem key="color" value={color}>
            <Typography sx={{ color: `${color}` }}>Color</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
