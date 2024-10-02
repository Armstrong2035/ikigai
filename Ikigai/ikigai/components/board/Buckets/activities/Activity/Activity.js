"use client";
import React, { useState } from "react";
import boardStore from "../../../store";
import Title from "./Title";
import AddRelationships from "./AddRelationships";
import Tasks from "./Tasks/Tasks";
import { Box, Card, CardContent, Grid, Stack, IconButton } from "@mui/material";
import ActivityMenu from "./ActivityMenu";
import AddTask from "./Tasks/AddTask";
import TimerIcon from "@mui/icons-material/Timer";
import TimeBlockModal from "./TimeBlocking/Modal";

export default function Activity({ bucketId, activity, bucket }) {
  const [isTimeblockOpen, setIsTimeblockOpen] = useState(false);

  const relationships = boardStore((state) => state.relationships);
  const rels = relationships.filter(
    (rel) =>
      activity.id === rel.activity1.id || activity.id === rel.activity2.id
  );

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

  return (
    <Card sx={{ backgroundColor: styles.backgroundColor }}>
      <CardContent>
        {/* Title and Utility Icons Section */}
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          {/* Title on one side */}
          <Grid item xs={9} sm={6}>
            <Title styles={styles} activity={activity} />
          </Grid>

          {/* Activity Menu and Timer Icon on the other side */}
          <Grid item xs={3} sm="auto">
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="flex-end"
            >
              <ActivityMenu
                activity={activity}
                setIsTimeblockOpen={setIsTimeblockOpen}
              />
              {/* <IconButton onClick={() => setIsTimeblockOpen(true)}>
                <TimerIcon />
              </IconButton> */}
            </Stack>
          </Grid>
        </Grid>

        {/* Additional content */}
        <AddRelationships
          activity={activity}
          getPriorityStyle={getPriorityStyle}
          styles={styles}
        />
        <TimeBlockModal
          isTimeblockOpen={isTimeblockOpen}
          setIsTimeblockOpen={setIsTimeblockOpen}
          activity={activity}
          styles={styles}
        />
        <Tasks activity={activity} styles={styles} />
        <AddTask activity={activity} styles={styles} />
      </CardContent>
    </Card>
  );
}
