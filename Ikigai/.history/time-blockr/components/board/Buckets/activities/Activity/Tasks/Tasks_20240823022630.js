import {
  FormGroup,
  Stack,
  IconButton,
  Paper,
  Typography,
  Checkbox,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import EditIcon from "@mui/icons-material/Edit";
import boardStore from "../../../../store";
import React, { useState } from "react";

export default function Tasks({ activity, styles }) {
  const tasks = boardStore((state) => state.tasks);
  const editTask = boardStore((state) => state.editTask);
  const removeTask = boardStore((state) => state.removeTask);
  const [editing, setEditing] = useState(false);
  const [editedTaskId, setEditedTaskId] = useState(null);
  // const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const [checkedTasks, setCheckedTasks] = useState({});

  // const handleUpdateTask = (taskId, newTitle) => {
  //   editTask(taskId, { title: newTitle });
  //   setEditing(false);
  //   setEditedTaskId(null);
  //   setEditedTaskTitle("");
  // };
  // const handleTaskCheck = (taskId) => {
  //   setCheckedTasks((prevCheckedTasks) => ({
  //     ...prevCheckedTasks,
  //     [taskId]: !prevCheckedTasks[taskId],
  //   }));
  // };

  console.log(tasks);

  return (
    <div>
      <Stack spacing={2}>
        {tasks
          .filter((task) => task.activityId === activity.id)
          .map((task) => (
            <Paper
              key={task.id}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: "16px",
                backgroundColor: styles.cardColor,
                color: "#CBD6D6",
              }}
            >
              <Checkbox
                checked={checkedTasks[task.id] || false}
                onChange={() => handleTaskCheck(task.id)}
                style={{ color: "#CBD6D6" }}
              />
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
                      textDecoration: checkedTasks[task.id]
                        ? "line-through"
                        : "none",
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
