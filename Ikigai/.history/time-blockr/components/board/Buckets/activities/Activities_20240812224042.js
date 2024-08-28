import React from "react";
import { IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";
import Activity from "./Activity/Activity";
import AddActivity from "./AddActivity";

export default function Activities({ bucket }) {
  console.log(bucket);

  return (
    <>
      <AddActivity bucketId={bucket.id} />
      {bucket.activities.map((activity) => (
        <Typography>{activity.title}</Typography>
        // <Activity key={activity.id} bucketId={bucket.id} activity={activity} />
      ))}
    </>
  );
}
