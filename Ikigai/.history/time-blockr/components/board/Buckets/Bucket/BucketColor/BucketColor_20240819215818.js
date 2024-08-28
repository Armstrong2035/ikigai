import { Stack, Box } from "@mui/material";
import React, { useState } from "react";
import { useStore } from "zustand";
import boardStore from "../../../store";

export default function ColorPicker({ bucketId }) {
  const updateBucketColor = boardStore((state) => state.updateBucketColor);

  const handleColorClick = (color) => {
    updateBucketColor(bucketId, color); // Update the bucket color in Zustand store
  };

  return (
    <>
      <label for="backgroundcolor">Select a color:</label>
      <input
        type="color"
        id="backgroundcolor"
        onChange={(e) => handleColorClick(e.target.value)}
      />
    </>
  );
}
