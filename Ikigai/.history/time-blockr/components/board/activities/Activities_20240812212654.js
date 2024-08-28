import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
