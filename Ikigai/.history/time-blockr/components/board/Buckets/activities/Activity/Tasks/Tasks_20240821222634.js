import React, { useState } from "react";
import boardStore from "../../../../store";

export default function Tasks({ activity }) {
  const addTask = boardStore((state) => state.addTask);
  const tasks = boardStore((state) => state.tasks);
  const updateTask = boardStore((state) => state.updateTask);
  const [title, setTitle] = useState("");
  const [editedTaskId, setEditedTaskId] = useState(null);

  const handleAddTask = () => {
    const newTask = {
      id: `${Date.now()}`,
      title: title,
      activityId: activity.id,
    };

    addTask(newTask);
    setTitle("");
  };

  const handleEditTask = (taskId) => {
    setEditedTaskId(taskId);
  };

  const handleUpdateTask = (taskId, newTitle) => {
    updateTask(taskId, newTitle);
    setEditedTaskId(null);
  };

  return (
    <div>
      {addTask ? (
        <FormGroup>
          <Stack direction={"row"}>
            <TextField
              value={title}
              type="text"
              placeholder={activity.title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />

            <IconButton>
              <CheckIcon onClick={handleAddTask} />
            </IconButton>
          </Stack>
        </FormGroup>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {editedTaskId === task.id ? (
                <TextField
                  value={task.title}
                  onChange={(e) => handleUpdateTask(task.id, e.target.value)}
                  onBlur={() => setEditedTaskId(null)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUpdateTask(task.id, e.target.value);
                    }
                  }}
                />
              ) : (
                <div onClick={() => handleEditTask(task.id)}>{task.title}</div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
