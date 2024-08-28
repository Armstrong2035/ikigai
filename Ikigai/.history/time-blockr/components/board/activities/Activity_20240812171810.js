"use client";
import React, { useState } from "react";
import boardStore from "../store";
import Title from "./Title";

export default function Activitiy(bucketId, activityid) {
  const buckets = useStore(boardStore, (state) => state.buckets);
  const addActivity = useStore(boardStore, (state) => state.addActivity);

  const handleSubmit = (taskId, newActivity, e) => {
    e.preventDefault;
    addActivity(taskId, newActivity);
  };

  return (
    <>
      <Title bucketId={buc} />
      <Tasks />
      <Relationships />
      <Stats />
    </>
  );
}
