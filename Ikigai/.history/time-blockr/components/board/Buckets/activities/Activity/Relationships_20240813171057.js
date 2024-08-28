import React, { useState } from "react";
import boardStore from "../../../store";
import { Box, Stack, Chip } from "@mui/material";

export default function Relationships({ bucketId, activity }) {
  const [relationships, setRelationships] = useState([]);
  const addRelationship = boardStore((state) => state.addRelationship);
  const buckets = boardStore((state) => state.buckets);

  const allActivities = buckets.map((bucket) => {
    const activities = [];

    bucket.activities.map((activity) => {
      activity.title;
    });

    return activities;
  });

  console.log(allActivities);

  const addRelationships = () => {
    addRelationship(relationships);
  };

  return (
    <>
      <Box>
        {relationships.map((relationship) => (
          <Stack direction="row">
            <Chip label={`${relationship}`} />
          </Stack>
        ))}
      </Box>
    </>
  );
}
