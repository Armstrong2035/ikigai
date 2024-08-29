import React from "react";
import { Container, Stack } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import boardStore from "../../store";
import Activity from "./Activity/Activity";
import AddActivity from "./AddActivity";

export default function Activities({ bucket }) {
  const activities = boardStore((state) => state.activities);

  // Filter activities based on the bucket ID
  const activitiesToRender = activities.filter(
    (activity) => activity.bucketId === bucket.id
  );

  return (
    <Container>
      {/* Add activity button */}
      <Stack direction="row" justifyContent="flex-end" mb={2}>
        <AddActivity bucketId={bucket.id} />
      </Stack>

      {/* Masonry layout for activities */}
      <Masonry columns={3} spacing={5}>
        {activitiesToRender.map((activity) => (
          <Activity
            key={activity.id}
            bucketId={bucket.id}
            activity={activity}
            bucket={bucket}
          />
        ))}
      </Masonry>
    </Container>
  );
}
