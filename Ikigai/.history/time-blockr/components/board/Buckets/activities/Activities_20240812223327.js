import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";
import { useStore } from "zustand";
import Activity from "./Activity/Activity";

export default function Activities({ bucket }) {
  const addActivity = boardStore((state) => state.addActivity);

  return (
    <>
      <AddActivity />
      {bucket.activities.map((activity) => (
        <Activity key={activity.id} bucketId={bucket.id} activity={activity} />
      ))}
    </>
  );
}
