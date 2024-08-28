import {
  FormGroup,
  Stack,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import boardStore from "../../../../store";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

export default function Tasks({ activity }) {
  const addTask = boardStore((state) => state.addTask);
  const tasks = boardStore((state) => state.tasks);
  const updateTask = boardStore((state) => state.updateTask);
  const [title, setTitle] = useState("");
  const [editedTaskId, setEditedTaskId] = useState(null);

  const handleAddTask = () => {
    const newTask = {
      id: `${Date.now()}`,
      title: title,
      activityId: activity.id,
    };

    addTask(newTask);
    setTitle("");
  };

  const handleEditTask = (taskId) => {
    setEditedTaskId(taskId);
  };

  const handleUpdateTask = (taskId, newTitle) => {
    updateTask(taskId, newTitle);
    setEditedTaskId(null);
  };

  return (
    <div>
      <FormGroup>
        <Stack direction={"row"}>
          <TextField
            value={title}
            type="text"
            placeholder={activity.title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />

          <IconButton>
            <AddIcon onClick={handleAddTask} />
          </IconButton>
        </Stack>
      </FormGroup>
      {tasks.map((task) => {
        <Paper>
          <Typography>{task.title}</Typography>
        </Paper>;
      })}
    </div>
  );
}
