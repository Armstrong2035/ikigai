import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";
import { useStore } from "zustand";
import Activitiy from "./Activity/Activity";

export default function Activities({ bucket }) {
  const addActivity = boardStore((state) => state.addActivity);

  return (
    <>
      <IconButton
        onClick={() =>
          addActivity(bucket.id, { id: Date.now(), title: "New Activity" })
        }
      ></IconButton>
      {bucket.activities.map((activity) => (
        <Activitiy bucketId={bucket.id} activityId={activity.id} />
      ))}
    </>
  );
}
