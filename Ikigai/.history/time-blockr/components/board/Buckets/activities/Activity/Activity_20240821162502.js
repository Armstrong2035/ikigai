"use client";
import React, { useState } from "react";
import boardStore from "../../../store";
import Title from "./Title";
import AddRelationship from "./AddRelationships";
import Tasks from "./Tasks/Tasks";
import { Box, Card, CardHeader, Chip } from "@mui/material";
import Priority from "./Priority";

export default function Activity({ bucketId, activity, bucket }) {
  const buckets = boardStore((state) => state.buckets);

  console.log(buckets);

  console.log(activity.relationships);

  const addActivity = boardStore((state) => state.addActivity);

  const handleSubmit = (taskId, newActivity, e) => {
    e.preventDefault;
    addActivity(taskId, newActivity);
  };

  return (
    <>
      <Card>
        <CardHeader
          title={activity.title}
          subtitle={activity.relationships.map((relationship) => (
            <Chip key={relationship.id} label={relationship.title} />
          ))}
        />

        <Title bucketId={bucketId} activity={activity} />
        <AddRelationship bucketId={bucketId} activity={activity} />
        <Priority bucketId={bucketId} activity={activity} />
        <Tasks bucketId={bucketId} activity={activity} />

        {/* 
        
        <Stats bucketId={bucketId} activity={activity} /> */}
      </Card>
    </>
  );
}
