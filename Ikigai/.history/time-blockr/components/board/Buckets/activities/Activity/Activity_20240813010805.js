"use client";
import React, { useState } from "react";
import boardStore from "../../../store";
import Title from "./Title";
import { Box } from "@mui/material";

export default function Activity({ bucketId, activity }) {
  const buckets = boardStore((state) => state.buckets);
  // const activity = boardStore((state) => {
  //   const bucket = state.buckets.find((b) => b.id === bucketId);
  //   return bucket?.activities.find((a) => a.id === activityId);
  // });

  // if (!activity) return null;

  console.log(activity);

  const addActivity = boardStore((state) => state.addActivity);

  const handleSubmit = (taskId, newActivity, e) => {
    e.preventDefault;
    addActivity(taskId, newActivity);
  };

  return (
    <>
      <Box>
        <Title bucketId={bucketId} activity={activity} />
        {/* <Tasks bucketId={bucketId} activity={activity} />
        <Relationships bucketId={bucketId} activity={activity} />
        <Stats bucketId={bucketId} activity={activity} /> */}
      </Box>
    </>
  );
}
