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
                padding: "16px",
                backgroundColor: styles.backgroundColor,
                color: "#CBD6D6",
              }}
            >
              {editedTaskId === task.id ? (
                <>
                  <TextField
                    value={editedTaskTitle}
                    onChange={(e) => setEditedTaskTitle(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUpdateTask(task.id, editedTaskTitle);
                      }
                    }}
                    InputProps={{
                      style: {
                        color: "#CBD6D6",
                      },
                    }}
                  />
                  <IconButton>
                    <CheckIcon
                      onClick={() => handleUpdateTask(task.id, editedTaskTitle)}
                      style={{ color: "#CBD6D6" }}
                    />
                  </IconButton>
                </>
              ) : (
                <>
                  <TextField
                    placeholder={task.title}
                    disabled={!editing}
                    InputProps={{
                      style: {
                        color: "#CBD6D6",
                        fontWeight: "bold",
                      },
                    }}
                  />
                  <IconButton
                    onClick={() => {
                      setEditing(true);
                      setEditedTaskId(task.id);
                      setEditedTaskTitle(task.title);
                    }}
                    style={{ color: "#CBD6D6" }}
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
