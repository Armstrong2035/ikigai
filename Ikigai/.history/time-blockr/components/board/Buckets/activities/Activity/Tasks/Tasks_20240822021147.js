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
                  />
                  <IconButton>
                    <CheckIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <TextField placeholder={task.title} disabled={!editing} />
                  <IconButton
                    onClick={() => {
                      setEditing(true);
                      setEditedTaskId(task.id);
                      setEditedTaskTitle(task.title);
                    }}
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
