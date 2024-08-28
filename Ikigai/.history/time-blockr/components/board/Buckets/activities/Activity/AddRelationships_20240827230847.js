import React from "react";
import boardStore from "../../../store";
import { Autocomplete, Chip, TextField, Box } from "@mui/material";

export default function AddRelationships({ activity }) {
  const addRelationship = boardStore((state) => state.addRelationship);
  const removeRelationship = boardStore((state) => state.removeRelationship);
  const activities = boardStore((state) => state.activities);
  const relationships = boardStore((state) => state.relationships);

  const relatedActivities = relationships
    .filter(
      (rel) =>
        rel.activity1.id === activity.id || rel.activity2.id === activity.id
    )
    .map((rel) =>
      rel.activity1.id === activity.id ? rel.activity2 : rel.activity1
    );

  const options = [
    ...activities.filter((a) => a.id !== activity.id),
    ...relatedActivities,
  ];

  const handleRelationshipChange = (event, newValue) => {
    if (newValue && !relatedActivities.some((ra) => ra.id === newValue.id)) {
      const newRelationship = {
        id: `${Date.now()}`,
        activity1: {
          id: activity.id,
          title: activity.title,
        },
        activity2: {
          id: newValue.id,
          title: newValue.title,
        },
      };
      addRelationship(newRelationship);
    }
  };

  const handleDelete = (relationshipToDelete) => {
    removeRelationship(relationshipToDelete.id);
  };

  return (
    <Box>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.title}
        onChange={handleRelationshipChange}
        renderInput={(params) => (
          <TextField {...params} label="Add or Remove Relationship" />
        )}
        renderOption={(props, option) => (
          <li {...props}>
            {option.title}
            {relatedActivities.some((ra) => ra.id === option.id) && (
              <Chip
                size="small"
                label="Remove"
                onDelete={(e) => {
                  e.stopPropagation();
                  const relToRemove = relationships.find(
                    (rel) =>
                      (rel.activity1.id === activity.id &&
                        rel.activity2.id === option.id) ||
                      (rel.activity2.id === activity.id &&
                        rel.activity1.id === option.id)
                  );
                  if (relToRemove) handleDelete(relToRemove);
                }}
                sx={{ ml: 1 }}
              />
            )}
          </li>
        )}
      />
    </Box>
  );
}
