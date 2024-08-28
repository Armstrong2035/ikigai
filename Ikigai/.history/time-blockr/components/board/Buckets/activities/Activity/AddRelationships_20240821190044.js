import React, { useState } from "react";
import { useStore } from "zustand";
import boardStore from "../../../store";
import { Autocomplete, Chip, TextField } from "@mui/material";

const AddRelationship = ({ activity }) => {
  const addRelationship = boardStore((state) => state.AddRelationship);
  const relationships = boardStore((state) => state.relationships);
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
      <div>
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
            />
          ))}
      </div>
    </>
  );
};

export default AddRelationship;
