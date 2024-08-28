import React from "react";
import { IconButton } from "@mui/material";

export default function Activities() {
  return (
    <>
      {bucket.activities.map((activity) => (
        <Activitiy bucketId={bucket.id} activityId={activity.id} />
      ))}
    </>
  );
}
