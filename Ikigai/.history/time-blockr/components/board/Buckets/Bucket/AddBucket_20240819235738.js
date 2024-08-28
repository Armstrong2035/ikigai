"use client";
import React from "react";
import { useStore } from "zustand";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";

export default function AddBucket() {
  const addBucket = boardStore((state) => state.addBucket);

  const handleAddBucket = () => {
    const newBucket = {
      id: `${Date.now()}`,
      title: "New Bucket",
      activities: [],
    };
    addBucket(newBucket);
    console.log(newBucket.id);
  };

  return (
    <IconButton onClick={handleAddBucket}>
      <AddIcon />
    </IconButton>
  );
}
