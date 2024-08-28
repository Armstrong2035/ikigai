import { Stack, TextField, IconButton, Paper } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import boardStore from "../../../../store";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";

export default function Tasks({ activity, styles }) {
  const tasks = boardStore((state) => state.tasks);
  const editTask = boardStore((state) => state.editTask);
  const [editing, setEditing] = useState(false);
  const [editedTaskId, setEditedTaskId] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");

  const handleUpdateTask = (taskId, newTitle) => {
    editTask(taskId, newTitle);
    setEditing(false);
    setEditedTaskId(null);
    setEditedTaskTitle("");
  };

  return (
    <div>
      <Stack>
        {tasks
          .filter((task) => task.activityId === activity.id)
          .map((task) => (
            <Paper
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 0",
                backgroundColor: styles.cardColor,
              }}
            >
              {editedTaskId === task.id ? (
                <>
                  <TextField
                    value={editedTaskTitle}
                    onChange={(e) => setEditedTaskTitle(e.target.value)}
                    onBlur={() => handleUpdateTask(task.id, editedTaskTitle)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUpdateTask(task.id, editedTaskTitle);
                      }
                    }}
                    sx={{
                      flex: 1,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none", // Remove the border
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#D8D8D8", // Text color
                        padding: "8px 0", // Optional: adjust padding
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#D8D8D8", // Placeholder text color (same as input text color)
                        opacity: 1, // Ensure the placeholder is fully opaque
                      },
                    }}
                    placeholder="Enter task title..."
                    InputProps={{
                      disableUnderline: true, // Disable underline for filled variant
                    }}
                  />
                  <IconButton
                    onClick={() => handleUpdateTask(task.id, editedTaskTitle)}
                    sx={{ color: "#D8D8D8" }} // Icon color
                  >
                    <CheckIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <TextField
                    value={task.title}
                    disabled
                    sx={{
                      flex: 1,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none", // Remove the border for disabled input
                        },
                      },
                      "& .MuiInputBase-input": {
                        color: "#D8D8D8", // Text color for disabled input
                        padding: "8px 0", // Optional: adjust padding
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: "#D8D8D8", // Placeholder text color (same as input text color)
                        opacity: 1, // Ensure the placeholder is fully opaque
                      },
                    }}
                    placeholder={task.title}
                  />
                  <IconButton
                    onClick={() => {
                      setEditing(true);
                      setEditedTaskId(task.id);
                      setEditedTaskTitle(task.title);
                    }}
                    sx={{ color: "#D8D8D8" }} // Icon color
                  >
                    <EditIcon />
                  </IconButton>
                </>
              )}
            </Paper>
          ))}
      </Stack>
    </div>
  );
}
