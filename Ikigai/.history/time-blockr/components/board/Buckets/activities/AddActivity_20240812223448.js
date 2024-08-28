"use client";
import React from "react";
import { useStore } from "zustand";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../store";

export default function AddActivity({ bucketId }) {
  const addActivity = boardStore((state) => state.addActivity);

  const handleAddBucket = () => {
    const newActivity = {
      id: Date.now(),
      title: "New Activity",
      tasks: [],
      relationships: [],
      stats: [],
    };
    addActivity(bucketId, newActivity);
  };

  return (
    <IconButton onClick={handleAddBucket}>
      <AddIcon />
    </IconButton>
  );
}
