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
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import boardStore from "../../../store";

export default function BucketTitle({ bucketId, title, bucket }) {
  const [editMode, setEditMode] = useState(false);

  const updateBucketTitle = useStore(
    boardStore,
    (state) => state.updateBucketTitle
  );

  const handleTitleChange = (e) => {
    updateBucketTitle(bucketId, e.target.value);
  };

  return (
    <>
      {editMode ? (
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
              <CheckIcon onClick={() => setEditMode(false)} />
            </IconButton>
          </Stack>
        </FormGroup>
      ) : (
        <div>
          <Typography>
            {bucket.title ? bucket.title : "New Activity"}
          </Typography>
          <IconButton>
            <EditIcon onClick={() => setEditMode(true)} />
          </IconButton>
        </div>
      )}
    </>
  );
}
