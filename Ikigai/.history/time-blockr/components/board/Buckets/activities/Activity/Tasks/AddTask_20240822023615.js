import {
  FormGroup,
  Stack,
  TextField,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import boardStore from "../../../../store";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function AddTask({ activity }) {
  const addTask = boardStore((state) => state.addTask);

  const handleAddTask = () => {
    const newTask = {
      id: `${Date.now()}`,
      title: "New task",
      activityId: activity.id,
    };

    addTask(newTask);
  };

  return (
    <div>
      <IconButton>
        <AddIcon onClick={handleAddTask} />
      </IconButton>
    </div>
  );
}
