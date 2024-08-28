import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "./store";
import { useStore } from "zustand";

export default function Activities() {
  const addActivity = useStore(boardStore, (state) => state.addActivity);
  return (
    <>
      <IconButton onClick={handleAddBucket}>
        <AddIcon />
      </IconButton>
      {bucket.activities.map((activity) => (
        <Activitiy bucketId={bucket.id} activityId={activity.id} />
      ))}
    </>
  );
}
