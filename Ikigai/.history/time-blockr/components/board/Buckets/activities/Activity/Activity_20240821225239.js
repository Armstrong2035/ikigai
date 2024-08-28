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

  const [addTask, setAddTask] = useState(false);

  // console.log(buckets);
  // console.log(rels);

  return (
    <>
      <Card>
        <CardHeader
          title={
            <Stack direction="row" justifyContent={"space-between"}>
              <Typography variant="h4">{activity.title}</Typography>
              <AddTask />
            </Stack>
          }
        />
        <CardContent>{/* <Tasks activity={activity} /> */}</CardContent>

        {/* <Title bucketId={bucketId} activity={activity} /> */}
        {/* <AddRelationship bucketId={bucketId} activity={activity} /> */}
        {/* <Priority bucketId={bucketId} activity={activity} /> */}

        {/* 
        
        <Stats bucketId={bucketId} activity={activity} /> */}
      </Card>
    </>
  );
}
