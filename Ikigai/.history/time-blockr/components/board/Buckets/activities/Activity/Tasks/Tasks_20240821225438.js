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
      <Stack>
        {tasks
          .filter((task) => task.activityId === activity.id)
          .map((task) => (
            <Paper key={task.id} sx={{ height: "100px" }}>
              <Typography>{task.title}</Typography>
            </Paper>
          ))}
      </Stack>
    </div>
  );
}
