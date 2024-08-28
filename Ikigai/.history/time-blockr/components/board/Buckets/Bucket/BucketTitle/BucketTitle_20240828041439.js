"use client";
import React, { useState, useEffect } from "react"; // Added useEffect
import { useStore } from "zustand";
import {
  TextField,
  IconButton,
  Stack,
  FormGroup,
  Typography,
} from "@mui/material";

import boardStore from "../../../store";

export default function BucketTitle({ bucketId, bucket }) {
  const updateBucketTitle = useStore(
    boardStore,
    (state) => state.updateBucketTitle
  );

  const [title, setTitle] = useState(bucket.title); // Local state for input

  useEffect(() => {
    setTitle(bucket.title); // Update local state when bucket.title changes
  }, [bucket.title]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value; // Get the new title from input
    setTitle(newTitle); // Update local state
    updateBucketTitle(bucketId, newTitle); // Update store with new title
  };

  return (
    <>
      <input
        type="text"
        required
        value={title} // Use local state
        onChange={handleTitleChange}
        placeholder={bucket.title}
        style={{
          border: "none",
          color: "#CBD6D6",
          backgroundColor: "#191919",
          fontSize: "50px",
          textAlign: "center",
        }}
      />
    </>
  );
}

// value={title}
//       type="text"
//       placeholder={activity.title}
//       required
//       onChange={handleChange}
//       style={{
//         border: "none",
//         backgroundColor: styles.backgroundColor,
//         color: "#CBD6D6",
//         fontSize: "20px",
