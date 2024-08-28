import React, { useState } from "react";
import { Typography, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import boardStore from "../../../../store";

export default function TaskTitle({ activity, styles, task, checkedTasks }) {
  const editTask = boardStore((state) => state.editTask);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const [editing, setEditing] = useState(false);

  const handleUpdateTask = (taskId, newTitle) => {
    editTask(taskId, { title: newTitle });
    setEditing(false);
    setEditedTaskTitle("");
  };

  return (
    <>
      {editing ? (
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
          <IconButton
            onClick={() => handleUpdateTask(task.id, editedTaskTitle)}
          >
            <CheckIcon style={{ color: "#CBD6D6" }} />
          </IconButton>
        </>
      ) : (
        <>
          <Typography
            variant="body1"
            style={{
              flexGrow: 1,
              fontWeight: "bold",
              textDecoration: checkedTasks[task.id] ? "line-through" : "none",
            }}
          >
            {task.title}
          </Typography>
          <IconButton
            onClick={() => {
              setEditing(true);
              setEditedTaskTitle(task.title);
            }}
            style={{ color: "#CBD6D6" }}
          >
            <EditIcon />
          </IconButton>
        </>
      )}
    </>
  );
}
