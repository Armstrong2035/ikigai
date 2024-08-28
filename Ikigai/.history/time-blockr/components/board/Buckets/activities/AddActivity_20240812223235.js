"use client";
import React from "react";
import { useStore } from "zustand";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../store";

export default function AddBucket() {
  const addActivity = boardStore((state) => state.addActivity);

  const handleAddBucket = () => {
    const newActivity = {
      id: Date.now(),
      title: "",
      tasks: [],
      relationships: [],
      stats: [],
    };
    addBucket(newBucket);
  };

  return (
    <IconButton onClick={handleAddBucket}>
      <AddIcon />
    </IconButton>
  );
}
