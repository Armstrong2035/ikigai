import React from "react";
import { IconButton, Typography, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";
import Activity from "./Activity/Activity";
import AddActivity from "./AddActivity";

export default function Activities({ bucket }) {
  console.log(bucket);

  return (
    <>
      <AddActivity bucketId={bucket.id} />

      <Stack spacing={2}>
        {bucket.activities.map((activity) => (
          <Activity
            key={activity.id}
            bucketId={bucket.id}
            activity={activity}
          />
        ))}
      </Stack>
    </>
  );
}
