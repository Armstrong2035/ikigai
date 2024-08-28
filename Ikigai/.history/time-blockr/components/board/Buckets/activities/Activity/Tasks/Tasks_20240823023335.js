import React, { useState } from "react";
import { Stack, Paper, Checkbox } from "@mui/material";
import boardStore from "../../../../store";
import TaskTitle from "./TaskTitle";

export default function Tasks({ activity, styles }) {
  const tasks = boardStore((state) => state.tasks);
  const [checkedTasks, setCheckedTasks] = useState({});

  const handleTaskCheck = (taskId) => {
    setCheckedTasks((prevCheckedTasks) => ({
      ...prevCheckedTasks,
      [taskId]: !prevCheckedTasks[taskId],
    }));
  };

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
              <TaskTitle
                activity={activity}
                styles={styles}
                task={task}
                checkedTasks={checkedTasks}
              />
            </Paper>
          ))}
      </Stack>
    </div>
  );
}
