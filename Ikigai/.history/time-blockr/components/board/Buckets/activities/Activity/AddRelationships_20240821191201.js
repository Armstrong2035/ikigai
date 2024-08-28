import React, { useState } from "react";
import { useStore } from "zustand";
import boardStore from "../../../store";
import { Autocomplete, Chip, TextField } from "@mui/material";

const AddRelationship = ({ activity }) => {
  const addRelationship = boardStore((state) => state.addRelationship);
  const relationships = boardStore((state) => state.relationships);
  const activities = boardStore((state) => state.activities);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleRelationshipChange = (_, newValue) => {
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
      setSelectedActivity(null);
    }
  };

  return (
    <>
      <Autocomplete
        options={activities}
        getOptionLabel={(option) => option.title}
        value={selectedActivity}
        onChange={handleRelationshipChange}
        renderInput={(params) => (
          <TextField {...params} label="Add Relationship" />
        )}
      />
    </>
  );
};

export default AddRelationship;
