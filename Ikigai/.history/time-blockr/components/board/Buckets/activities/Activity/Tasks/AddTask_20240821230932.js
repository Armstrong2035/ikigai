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
      {/* <FormGroup>
        <Stack direction={"row"}>
          <TextField
            value={title}
            type="text"
            required
            onChange={(e) => setTitle(e.target.value)}
          /> */}

      <IconButton>
        <AddIcon onClick={handleAddTask} />
      </IconButton>
      {/* </Stack>
      </FormGroup> */}
    </div>
  );
}
