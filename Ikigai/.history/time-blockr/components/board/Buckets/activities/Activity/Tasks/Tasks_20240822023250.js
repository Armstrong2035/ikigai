import { FormGroup, Stack, IconButton, Paper, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import boardStore from "../../../../store";
import React, { useState } from "react";

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
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                backgroundColor: "#1F2A2A",
                color: "#CBD6D6",
              }}
            >
              {editedTaskId === task.id ? (
                <>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexGrow: 1,
                    }}
                  >
                    <input
                      type="text"
                      value={editedTaskTitle}
                      onChange={(e) => setEditedTaskTitle(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleUpdateTask(task.id, editedTaskTitle);
                        }
                      }}
                      style={{
                        backgroundColor: "#1F2A2A",
                        border: "none",
                        color: "#CBD6D6",
                        fontSize: "16px",
                        fontWeight: "bold",
                        flexGrow: 1,
                      }}
                    />
                  </div>
                  <IconButton>
                    <CheckIcon
                      onClick={() => handleUpdateTask(task.id, editedTaskTitle)}
                      style={{ color: "#CBD6D6" }}
                    />
                  </IconButton>
                </>
              ) : (
                <>
                  <Typography
                    variant="body1"
                    style={{
                      flexGrow: 1,
                      fontWeight: "bold",
                    }}
                  >
                    {task.title}
                  </Typography>
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
