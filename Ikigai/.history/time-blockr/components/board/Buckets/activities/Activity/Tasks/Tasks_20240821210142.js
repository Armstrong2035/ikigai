import boardStore from "../../../../store";
import React, { useState } from "react";
export default function Tasks({ activity }) {
  const addTask = boardStore((state) => state.addTask);

  const handleAddTask = () => {
    const newTask = {
      title: "",
      activityId: activity.id,
    };
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
