"use client";
import React from "react";
import { useStore } from "zustand";
import { Typography, IconButton, Stack, FormGroup } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import boardStore from "../../../store";

export default function EditBucketTitle({ bucketId, title, bucket }) {
  const bucket = boardStore((state) => state.bucket);

  return (
    <FormGroup onSubmit={(e) => e.preventDefault()}>
      <Stack direction="row">
        <TextField
          type="text"
          required
          value={title}
          onChange={handleTitleChange}
          placeholder="Bucket title"
          style={{ border: "none" }}
        />
        <IconButton>
          <CheckIcon />
        </IconButton>
      </Stack>
    </FormGroup>
  );
}
