import { Stack, Box } from "@mui/material";
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
      <InputLabel>Age</InputLabel>
      <Select value={age} label="Age">
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
