import React from "react";
import boardStore from "../../../store";
import { Chip, Box } from "@mui/material";

export default function Relationships({ activity, getPriorityStyle }) {
  const relationships = boardStore((state) => state.relationships);
  const removeRelationship = boardStore((state) => state.removeRelationship);

  //   const relatedActivities = relationships
  //     .filter(
  //       (rel) =>
  //         rel.activity1.id === activity.id || rel.activity2.id === activity.id
  //     )
  //     .map((rel) => ({
  //       relatedActivity:
  //         rel.activity1.id === activity.id ? rel.activity2 : rel.activity1,
  //       relationshipId: rel.id,
  //     }));

  const handleDelete = (relationshipToDelete) => {
    removeRelationship(relationshipToDelete.id);
  };

  return (
    <Box sx={{}}>
      {relationships
        .filter(
          (rel) =>
            rel.activity1.id === activity.id || rel.activity2.id === activity.id
        )
        .map((rel) => {
          //   const style = getPriorityStyle(activity.priority);
          return (
            <Chip
              key={rel.id}
              label={
                rel.activity1.id === activity.id
                  ? rel.activity2.title
                  : rel.activity1.title
              }
              onDelete={() => handleDelete(rel)}
              sx={{ mr: 1, mb: 1 }}
            />
          );
        })}
    </Box>
  );
}
