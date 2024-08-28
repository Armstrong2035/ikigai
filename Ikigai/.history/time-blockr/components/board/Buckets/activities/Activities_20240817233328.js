import React from "react";
import { IconButton, Typography, Stack, Grid, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";
import Activity from "./Activity/Activity";
import AddActivity from "./AddActivity";

export default function Activities({ bucket }) {
  console.log(bucket);

  return (
    <>
      <Container>
        <AddActivity bucketId={bucket.id} />

        <Grid container direction={"row"} spacing={5} lg={4}>
          {bucket.activities.map((activity) => (
            <Grid item>
              <Activity
                key={activity.id}
                bucketId={bucket.id}
                activity={activity}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
