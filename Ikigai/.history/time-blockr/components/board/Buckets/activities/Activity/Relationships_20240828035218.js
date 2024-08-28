import React from "react";
import boardStore from "../../../store";
import { Chip, Box } from "@mui/material";

export default function Relationships({ activity, getPriorityStyle }) {
  const relationships = boardStore((state) => state.relationships);
  const removeRelationship = boardStore((state) => state.removeRelationship);

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
          const relatedActivity =
            rel.activity1.id === activity.id ? rel.activity2 : rel.activity1;
          const style = getPriorityStyle(relatedActivity.priority);
          console.log(style);
          return (
            <Chip
              key={rel.id}
              label={relatedActivity.title}
              onDelete={() => handleDelete(rel)}
              sx={{ backgroundColor: style.CardColor, mr: 1, mb: 1 }}
            />
          );
        })}
    </Box>
  );
}
