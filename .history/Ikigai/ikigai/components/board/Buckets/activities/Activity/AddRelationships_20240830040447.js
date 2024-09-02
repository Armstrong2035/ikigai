import React from "react";
import boardStore from "../../../store";
import { Autocomplete, Chip, TextField, Box } from "@mui/material";
import Relationships from "./Relationships";

export default function AddRelationships({
  activity,
  getPriorityStyle,
  styles,
}) {
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
          priority: activity.priority,
        },
        activity2: {
          id: newValue.id,
          title: newValue.title,
          priority: newValue.priority,
        },
      };
      addRelationship(newRelationship);
    }
  };

  // const handleDelete = (relationshipToDelete) => {
  //   removeRelationship(relationshipToDelete.id);
  // };

  return (
    <Box>
      <Autocomplete
        sx={{
          backgroundColor: styles.backgroundColor,
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "1px solid",
            borderColor: "rgba(255, 255, 255, 0.23)",
          },
          "& .MuiInputLabel-root": {
            color: "#FFFFFF",
          },
          "& .MuiInputBase-input": {
            color: "#FFFFFF",
          },
        }}
        options={activities.filter((a) => a.id !== activity.id)}
        getOptionLabel={(option) => option.title}
        onChange={handleRelationshipChange}
        renderInput={(params) => (
          <TextField {...params} label="Add Relationship" />
        )}
      />
      <Relationships activity={activity} getPriorityStyle={getPriorityStyle} />
    </Box>
  );
}