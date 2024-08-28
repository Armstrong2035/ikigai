import React, { useState } from "react";

export default function TaskTitle() {
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
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
