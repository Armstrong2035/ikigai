import React, { useState, useEffect } from "react";
import boardStore from "../../../store";
import { Box, Stack, Chip, FormGroup, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

export default function Relationships({ bucketId, activity }) {
  const addRelationship = boardStore((state) => state.addRelationship);
  const buckets = boardStore((state) => state.buckets);

  const allActivities = buckets.flatMap((bucket) =>
    bucket.activities.filter((act) => act.id !== activity.id)
  );

  useEffect(() => {
    setRelationships(activity.relationships || []);
  }, [activity]);

  const [relationships, setRelationships] = useState(
    activity.relationships || []
  );

  const handleRelationshipChange = (e, relatedActivity) => {
    if (e.target.checked) {
      const newRelationship = {
        id: relatedActivity.id,
        title: relatedActivity.title,
        bucketId: relatedActivity.bucketId,
      };
      addRelationship(bucketId, activity.id, newRelationship);
      setRelationships([...relationships, newRelationship]);
    } else {
      // Here you would also need to implement a removeRelationship function in your store
      setRelationships(
        relationships.filter((rel) => rel.id !== relatedActivity.id)
      );
    }
  };

  return (
    <Box>
      <Stack direction="row" spacing={1} mb={2}>
        {relationships.map((relationship) => (
          <Chip key={relationship.id} label={relationship.title} />
        ))}
      </Stack>

      <FormGroup>
        {allActivities.map((act) => (
          <FormControlLabel
            key={act.id}
            control={
              <Checkbox
                checked={relationships.some((rel) => rel.id === act.id)}
                onChange={(e) => handleRelationshipChange(e, act)}
              />
            }
            label={act.title}
          />
        ))}
      </FormGroup>
    </Box>
  );
}
