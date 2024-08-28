import React, { useState, useEffect } from "react";
import boardStore from "../../../store";
import { Autocomplete, Chip, TextField, Box } from "@mui/material";

export default function AddRelationships({ activity }) {
  const addRelationship = boardStore((state) => state.addRelationship);
  const relationships = boardStore((state) => state.relationships);
  const removeRelationship = boardStore((state) => state.removeRelationship);
  const activities = boardStore((state) => state.activities);

  const handleRelationshipChange = (event, newValue) => {
    if (newValue) {
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
      <Box sx={{ mt: 2 }}>
        {relationships
          .filter(
            (rel) =>
              rel.activity1.id === activity.id ||
              rel.activity2.id === activity.id
          )
          .map((rel) => (
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
          ))}
      </Box>
    </Box>
  );
}
