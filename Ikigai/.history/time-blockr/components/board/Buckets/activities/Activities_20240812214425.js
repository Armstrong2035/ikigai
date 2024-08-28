import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";
import { useStore } from "zustand";
import Activitiy from "./Activity/Activity";

export default function Activities() {
  const addActivity = useStore(boardStore, (state) => state.addActivity);
  const bucket = useStore(boardStore, (state) => state.bucket);
  return (
    <>
      <IconButton onClick={addActivity}>
        <AddIcon />
      </IconButton>
      {bucket.activities.map((activity) => (
        <Activitiy bucketId={bucket.id} activityId={activity.id} />
      ))}
    </>
  );
}
