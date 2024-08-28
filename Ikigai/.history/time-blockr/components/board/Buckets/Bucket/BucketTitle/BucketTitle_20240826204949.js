"use client";
import React, { useState } from "react";
import { useStore } from "zustand";
import {
  TextField,
  IconButton,
  Stack,
  FormGroup,
  Typography,
} from "@mui/material";

import boardStore from "../../../store";

export default function BucketTitle({ bucketId, title, bucket }) {
  const updateBucketTitle = useStore(
    boardStore,
    (state) => state.updateBucketTitle
  );

  const handleTitleChange = (e) => {
    updateBucketTitle(bucketId, e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          required
          value={title}
          onChange={handleTitleChange}
          placeholder={bucket.title}
          style={{ border: "none", color: "#CBD6D6", fontSize: "20px" }}
        />
      </form>
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
