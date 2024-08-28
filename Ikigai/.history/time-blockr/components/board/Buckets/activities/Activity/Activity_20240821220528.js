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
} from "@mui/material";
import Priority from "./Priority";

export default function Activity({ bucketId, activity, bucket }) {
  const buckets = boardStore((state) => state.buckets);
  const relationships = boardStore((state) => state.relationships);
  const rels = relationships.filter(
    (rel) =>
      activity.id === rel.activity1.id || activity.id === rel.activity2.id
  );

  console.log(buckets);
  console.log(rels);

  return (
    <>
      <Card>
        <CardHeader
          title={
            <Stack>
              <Typography variant="h4">{activity.title}</Typography>
            </Stack>
          }
        />
        <CardContent></CardContent>

        {/* <Title bucketId={bucketId} activity={activity} /> */}
        {/* <AddRelationship bucketId={bucketId} activity={activity} /> */}
        {/* <Priority bucketId={bucketId} activity={activity} /> */}
        <Tasks activity={activity} />

        {/* 
        
        <Stats bucketId={bucketId} activity={activity} /> */}
      </Card>
    </>
  );
}
