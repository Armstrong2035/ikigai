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
    switch (activity.priority) {
      case "none":
        return {
          backgroundColor: "#1C1C1C",
          cardColor: "3a3a3a",
          textColor: "#6C7E7F",
        };
      case "low":
        return {
          backgroundColor: "#1D2220",
          cardColor: "2F3C36",
          textColor: "#2D5E35",
        };

      case "medium":
        return {
          backgroundColor: "#231F1A",
          cardColor: "#56452F",
          textColor: "#9B6E23",
        };
      case "high":
        return {
          backgroundColor: "#241E1D",
          cardColor: "#522E2A",
          textColor: "#8F3A35",
        };
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
