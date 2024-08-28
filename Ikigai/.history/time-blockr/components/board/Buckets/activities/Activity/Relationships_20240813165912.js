import React, { useState } from "react";
import boardStore from "../../../store";

export default function Relationships({ bucketId, activity }) {
  const [relationships, setRelationships] = useState([]);
  const addRelationship = boardStore((state) => state.addRelationship);
  const buckets = boardStore((state) => state.buckets);

  const allActivities = buckets.map((bucket) => {
    return bucket.activities;
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
