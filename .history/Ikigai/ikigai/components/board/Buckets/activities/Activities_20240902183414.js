import React from "react";
import { IconButton, Typography, Stack, Grid, Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";
import Activity from "./Activity/Activity";
import AddActivity from "./AddActivity";
import Masonry from "@mui/lab/Masonry";

export default function Activities({ bucket }) {
  const activities = boardStore((state) => state.activities);

  const activitiesToRender = activities.filter(
    (activity) => activity.bucketId === bucket.id
  );
  console.log(activities);

  return (
    <>
      <Container sx={{ overflow: "hidden" }}>
        <AddActivity bucketId={bucket.id} />
        <Stack alignItems={"center"}>
          <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={5}>
            {activitiesToRender.map((activity) => (
              <Activity
                key={activity.id}
                bucketId={bucket.id}
                activity={activity}
                bucket={bucket}
              />
            ))}
          </Masonry>
        </Stack>
        {/* <Grid container direction={"row"} spacing={5}>
          {activitiesToRender.map((activity) => (
            <Grid item lg={4} sm={4} key={activity.id}>
              <Activity
                key={activity.id}
                bucketId={bucket.id}
                activity={activity}
                bucket={bucket}
              />
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </>
  );
}
