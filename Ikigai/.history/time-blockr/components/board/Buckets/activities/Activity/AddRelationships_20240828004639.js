import React from "react";
import boardStore from "../../../store";
import { Autocomplete, Chip, TextField, Box } from "@mui/material";

export default function AddRelationships({ activity }) {
  const addRelationship = boardStore((state) => state.addRelationship);

  const activities = boardStore((state) => state.activities);

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
        options={activities.filter((a) => a.id !== activity.id)}
        getOptionLabel={(option) => option.title}
        onChange={handleRelationshipChange}
        renderInput={(params) => (
          <TextField {...params} label="Add Relationship" />
        )}
      />
    </Box>
  );
}
