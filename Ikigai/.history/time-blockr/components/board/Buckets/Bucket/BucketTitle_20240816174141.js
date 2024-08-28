"use client";
import React from "react";
import { useStore } from "zustand";
import { TextField, IconButton, Stack, FormGroup } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import boardStore from "../../store";

export default function BucketTitle({ bucketId, title, bucket }) {
  const updateBucketTitle = useStore(
    boardStore,
    (state) => state.updateBucketTitle
  );

  const handleTitleChange = (e) => {
    updateBucketTitle(bucketId, e.target.value);
  };

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
