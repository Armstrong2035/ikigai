"use client";
import React, { useState } from "react";
import boardStore from "../store";

export default function Activitiy() {
  const buckets = useStore(bucketStore, (state) => state.buckets);
  const addActivity = useStore(bucketStore, (state) => state.addActivity);

  const [activity, setActivity] = useState({
    title: "",
    tasks: [{}],
    relationships: [],
    stats: [{}],
  });

  const handleSubmit = (taskId, newActivity) => {
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
