"use client";
import React, { useState } from "react";
import boardStore from "../../../store";
import Title from "./Title";
import AddRelationships from "./AddRelationships";
import Tasks from "./Tasks/Tasks";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Stack,
  Button,
  Grid,
  IconButton,
} from "@mui/material";
import ActivityMenu from "./ActivityMenu";
import Relationships from "./Relationships";
import AddTask from "./Tasks/AddTask";
import TimerIcon from "@mui/icons-material/Timer";
import TimeBlock from "./TimeBlocking/TimeBlocking";
import TimeBlockModal from "./TimeBlocking/Modal";

export default function Activity({ bucketId, activity, bucket }) {
  const [showAddRelationships, setShowAddRelationships] = useState(false);
  const [isHovering, setIsHovering] = useState();

  const buckets = boardStore((state) => state.buckets);
  const relationships = boardStore((state) => state.relationships);
  const rels = relationships.filter(
    (rel) =>
      activity.id === rel.activity1.id || activity.id === rel.activity2.id
  );

  const tasks = boardStore((state) => state.tasks);
  console.log(tasks);

  const getPriorityStyle = (priority) => {
    const priorityStyles = {
      none: {
        backgroundColor: "#1C1C1C",
        cardColor: "#3a3a3a",
        textColor: "#6C7E7F",
      },
      low: {
        backgroundColor: "#1D2220",
        cardColor: "#2F3C36",
        textColor: "#2D5E35",
      },
      medium: {
        backgroundColor: "#231F1A",
        cardColor: "#56452F",
        textColor: "#9B6E23",
      },
      high: {
        backgroundColor: "#241E1D",
        cardColor: "#522E2A",
        textColor: "#8F3A35",
      },
    };
    return priorityStyles[priority] || priorityStyles.none;
  };

  const styles = getPriorityStyle(activity.priority);
  // console.log(buckets);
  // console.log(rels);

  return (
    <Card sx={{ backgroundColor: styles.backgroundColor }}>
      <CardHeader
        title={
          <Stack>
            <Grid
              container
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item sm={6} xs={6}>
                <Title styles={styles} activity={activity} />
              </Grid>
              <Grid item sm={3} xs={3}>
                <ActivityMenu activity={activity} />
              </Grid>
              {/* <Grid item sm={3} xs={3}>
                <IconButton onClick={() => setIsTimeblockOpen(true)}>
                  <TimerIcon />
                </IconButton>
              </Grid> */}
            </Grid>

            <AddRelationships
              activity={activity}
              getPriorityStyle={getPriorityStyle}
              styles={styles}
            />
          </Stack>
        }
      />

      <CardContent>
        <Tasks activity={activity} styles={styles} />

        <AddTask activity={activity} styles={styles} />
      </CardContent>

      {/* 
        
      <Stats bucketId={bucketId} activity={activity} /> */}
    </Card>
  );
}
