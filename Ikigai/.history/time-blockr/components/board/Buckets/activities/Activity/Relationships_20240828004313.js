import React from "react";
import boardStore from "../../../store";
import { Chip, Box } from "@mui/material";

export default function Relationships({ activity }) {
  const relationships = boardStore((state) => state.relationships);
  const removeRelationship = boardStore((state) => state.removeRelationship);

  const relatedActivities = relationships
    .filter(
      (rel) =>
        rel.activity1.id === activity.id || rel.activity2.id === activity.id
    )
    .map((rel) => ({
      relatedActivity:
        rel.activity1.id === activity.id ? rel.activity2 : rel.activity1,
      relationshipId: rel.id,
    }));

  const handleDelete = (relationshipId) => {
    removeRelationship(relationshipId);
  };

  return (
    <Box>
      {relatedActivities.map(({ relatedActivity, relationshipId }) => (
        <Chip
          key={relationshipId}
          label={relatedActivity.title}
          onDelete={() => handleDelete(relationshipId)}
          sx={{ mr: 1, mb: 1 }}
        />
      ))}
    </Box>
  );
}
