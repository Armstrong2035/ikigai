import React, { useState } from "react";
import boardStore from "../../../../store";
import { Typography } from "@mui/material";

export default function TaskTitle({ activity, styles, task }) {
  const tasks = boardStore((state) => state.tasks);
  const editTask = boardStore((state) => state.editTask);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const [editing, setEditing] = useState(false);
  const [editedTaskId, setEditedTaskId] = useState(null);
  const handleUpdateTask = (taskId, newTitle) => {
    editTask(taskId, { title: newTitle });
    setEditing(false);
    setEditedTaskId(null);
    setEditedTaskTitle("");
  };
  const handleTaskCheck = (taskId) => {
    setCheckedTasks((prevCheckedTasks) => ({
      ...prevCheckedTasks,
      [taskId]: !prevCheckedTasks[taskId],
    }));
  };
  return (
    <>
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
              textDecoration: checkedTasks[task.id] ? "line-through" : "none",
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
    </>
  );
}
