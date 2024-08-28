import boardStore from "../../../../store";
import React, { useState } from "react";
export default function Tasks({ bucketId, activity }) {
  const addTask = boardStore((state) => state.addTask);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      addTask(bucketId, activity.id, {
        id: Date.now(),
        title: newTaskTitle,
        timeSpent: 0,
      });
      setNewTaskTitle("");
    }
  };

  return (
    <div>
      <input
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {activity.tasks?.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
