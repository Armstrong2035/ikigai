import React, { useState, useEffect, act } from "react";
import { FormGroup, TextField, Typography } from "@mui/material";
import boardStore from "../../../store";

export default function Title({ bucketId, activity }) {
  const [title, setTitle] = useState(activity.title);

  const editActivity = boardStore((state) => state.editActivity);

  const handleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    editActivity(activity.id, { title: newTitle });
  };

  return (
    <FormGroup>
      <TextField
        value={title}
        type="text"
        placeholder={activity.title}
        required
        onChange={handleChange}
      />
    </FormGroup>
  );
}
