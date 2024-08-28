import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import boardStore from "../../../store";

export default function Title({ bucketId, activity }) {
  const [title, setTitle] = useState(activity.title);

  const editActivity = boardStore((state) => state.editActivity);

  useEffect(() => {
    setTitle(activity.title);
  }, [activity.title]);

  const handleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    editActivity(bucketId, activity.id, { title: newTitle });
  };

  return (
    <TextField
      value={title}
      type="text"
      placeholder="Activity title"
      required
      onChange={handleChange}
    />
  );
}
