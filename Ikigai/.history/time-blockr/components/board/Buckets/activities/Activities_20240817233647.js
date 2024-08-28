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
        //Add quick navigation
        <AddActivity bucketId={bucket.id} />
        <Grid container direction={"row"} spacing={5}>
          {bucket.activities.map((activity) => (
            <Grid item lg={6} sm={12}>
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
