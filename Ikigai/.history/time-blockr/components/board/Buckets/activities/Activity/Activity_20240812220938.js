"use client";
import React, { useState } from "react";
import boardStore from "../../../store";
import Title from "./Title";

export default function Activity({ bucketId, activityId }) {
  const activity = boardStore((state) => {
    const bucket = state.buckets.find((b) => b.id === bucketId);
    return bucket?.activities.find((a) => a.id === activityId);
  });

  if (!activity) return null;

  const addActivity = boardStore((state) => state.addActivity);

  const handleSubmit = (taskId, newActivity, e) => {
    e.preventDefault;
    addActivity(taskId, newActivity);
  };

  return (
    <>
      <Title bucketId={bucketId} activity={activity} />
      <Tasks bucketId={bucketId} activity={activity} />
      <Relationships bucketId={bucketId} activity={activity} />
      <Stats bucketId={bucketId} activity={activity} />
    </>
  );
}
