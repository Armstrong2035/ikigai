import React from "react";
import boardStore from "../../../store";
import { Autocomplete, TextField } from "@mui/material";

export default function AddRelationships({ activity }) {
  const addRelationship = boardStore((state) => state.addRelationship);
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

  return (
    <Autocomplete
      options={activities.filter((a) => a.id !== activity.id)}
      getOptionLabel={(option) => option.title}
      onChange={handleRelationshipChange}
      renderInput={(params) => (
        <TextField {...params} label="Add Relationship" />
      )}
    />
  );
}
