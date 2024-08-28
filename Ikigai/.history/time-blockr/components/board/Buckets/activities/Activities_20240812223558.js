import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";
import Activity from "./Activity/Activity";
import AddActivity from "./AddActivity";

export default function Activities({ bucket }) {
  const addActivity = boardStore((state) => state.addActivity);

  return (
    <>
      <AddActivity bucketId={bucket.id} />
      {bucket.activities.map((activity) => (
        <Activity key={activity.id} bucketId={bucket.id} activity={activity} />
      ))}
    </>
  );
}
