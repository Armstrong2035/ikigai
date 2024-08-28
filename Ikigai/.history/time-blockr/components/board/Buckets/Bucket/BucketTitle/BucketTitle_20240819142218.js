"use client";
import React from "react";
import { useStore } from "zustand";
import { Typography, IconButton, Stack, FormGroup } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import boardStore from "../../../store";

export default function EditBucketTitle({ bucketId, title, bucket }) {
  const bucket = boardStore((state) => state.bucket);

  return (
    <div>
      <Typography>{bucket.title}</Typography>
      <IconButton>
        <EditIcon />
      </IconButton>
    </div>
  );
}
