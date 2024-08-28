import React from "react";
import boardStore from "../../../store";
import { Chip, Box } from "@mui/material";

export default function Relationships({ activity }) {
  const relationships = boardStore((state) => state.relationships);
  const removeRelationship = boardStore((state) => state.removeRelationship);

  const getPriorityStyle = (priority) => {
    const priorityStyles = {
      none: {
        backgroundColor: "#1C1C1C",
        cardColor: "#3a3a3a",
        textColor: "#6C7E7F",
      },
      low: {
        backgroundColor: "#1D2220",
        cardColor: "#2F3C36",
        textColor: "#2D5E35",
      },
      medium: {
        backgroundColor: "#231F1A",
        cardColor: "#56452F",
        textColor: "#9B6E23",
      },
      high: {
        backgroundColor: "#241E1D",
        cardColor: "#522E2A",
        textColor: "#8F3A35",
      },
    };
    return priorityStyles[priority] || priorityStyles.none;
  };

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
          return (
            <Chip
              key={rel.id}
              label={relatedActivity.title}
              onDelete={() => handleDelete(rel)}
              sx={{ ...style, mr: 1, mb: 1 }}
            />
          );
        })}
    </Box>
  );
}
