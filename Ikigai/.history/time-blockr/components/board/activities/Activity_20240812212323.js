"use client";
import React, { useState } from "react";
import boardStore from "../store";
import Title from "./Title";

export default function Activitiy({ bucketId, activityId }) {
  const activity = useStore(boardStore, (state) => {
    const bucket = state.buckets.find((b) => b.id === bucketId);
    return bucket?.activities.find((a) => a.id === activityId);
  });

  if (!activity) return null;

  const addActivity = useStore(boardStore, (state) => state.addActivity);

  const handleSubmit = (taskId, newActivity, e) => {
    e.preventDefault;
    addActivity(taskId, newActivity);
  };

  return (
    <>
     <div>
                      <IconButton onClick={()}>
                        <AddIcon />
                      </IconButton>
                    </div>
      <Title bucketId={bucketId} activity={activity} />
      <Tasks bucketId={bucketId} activity={activity} />
      <Relationships bucketId={bucketId} activity={activity} />
      <Stats bucketId={bucketId} activity={activity} />
    </>
  );
}
