"use client";
import React, { useState } from "react";
import boardStore from "../store";
import Title from "./Title";

export default function Activitiy() {
  const buckets = useStore(boardStore, (state) => state.buckets);
  const addActivity = useStore(boardStore, (state) => state.addActivity);

  const [activity, setActivity] = useState({
    title: "",
    tasks: [{}],
    relationships: [],
    stats: [{}],
  });

  const handleSubmit = (taskId, newActivity, e) => {
    e.preventDefault;
    addActivity(taskId, newActivity);
  };

  return (
    <>
      <Title title={activity.title} />
      <Tasks tasks={activity.tasks} />
      <Relationships rlationships={activity.relationships} />
      <Stats stats={activity.stats} />
    </>
  );
}
