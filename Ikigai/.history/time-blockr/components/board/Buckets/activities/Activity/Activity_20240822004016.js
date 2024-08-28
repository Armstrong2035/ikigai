"use client";
import React, { useState } from "react";
import boardStore from "../../../store";
import Title from "./Title";
import AddRelationship from "./AddRelationships";
import Tasks from "./Tasks/Tasks";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import Priority from "./Priority";
import AddTask from "./Tasks/AddTask";

export default function Activity({ bucketId, activity, bucket }) {
  const buckets = boardStore((state) => state.buckets);
  const relationships = boardStore((state) => state.relationships);
  const rels = relationships.filter(
    (rel) =>
      activity.id === rel.activity1.id || activity.id === rel.activity2.id
  );

  const tasks = boardStore((state) => state.tasks);
  console.log(tasks);

  const backgroundColor = () => {
    if (activity.priority === none) {
    }
  };
  // console.log(buckets);
  // console.log(rels);

  return (
    <>
      <Card sx={{ backgroundColor: {} }}>
        <CardHeader
          title={
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="h4">{activity.title}</Typography>

              <Priority bucketId={bucketId} activity={activity} />
            </Stack>
          }
        />
        <CardContent>
          <Tasks activity={activity} />

          <AddTask activity={activity} />
        </CardContent>

        {/* <Title bucketId={bucketId} activity={activity} /> */}
        {/* <AddRelationship bucketId={bucketId} activity={activity} /> */}

        {/* 
        
        <Stats bucketId={bucketId} activity={activity} /> */}
      </Card>
    </>
  );
}
