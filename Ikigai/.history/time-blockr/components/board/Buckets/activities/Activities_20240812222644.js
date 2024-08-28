import React, { useState } from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";
import Activity from "./Activity/Activity";

export default function Activities({ bucket }) {
  const addActivity = boardStore((state) => state.addActivity);
  const activities = boardStore(
    (state) => state.buckets.find((b) => b.id === bucket.id)?.activities || []
  );

  const [, forceUpdate] = useState();

  const handleAddActivity = () => {
    const newActivity = { id: Date.now(), title: "New Activity" };
    addActivity(bucket.id, newActivity);
    forceUpdate({});
  };

  return (
    <>
      <IconButton onClick={handleAddActivity}>
        <AddIcon />
      </IconButton>
      {activities.map((activity) => (
        <Activity key={activity.id} bucketId={bucket.id} activity={activity} />
      ))}
    </>
  );
}
