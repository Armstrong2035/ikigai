import { FormGroup, Stack, TextField } from "@mui/material";
import boardStore from "../../../../store";
import React, { useState } from "react";
export default function Tasks({ activity }) {
  const addTask = boardStore((state) => state.addTask);
  const tasks = boardStore((state) => state.tasks);
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    const newTask = {
      id: `${Date.now()}`,
      title: title,
      activityId: activity.id,
    };

    addTask(newTask);
  };

  return (
    <Stack>
      <FormGroup>
        <TextField
          value={title}
          type="text"
          placeholder={activity.title}
          required
          onChange={handleChange}
        />
      </FormGroup>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks?.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </Stack>
  );
}
