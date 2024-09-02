import React from "react";
import boardStore from "../../../store";
import { Autocomplete, TextField, Box } from "@mui/material";
import Relationships from "./Relationships";

export default function AddRelationships({
  activity,
  getPriorityStyle,
  styles,
}) {
  const addRelationship = boardStore((state) => state.addRelationship);
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

  return (
    <Box>
      <Autocomplete
        sx={{
          backgroundColor: styles.backgroundColor,
          width: { xs: "100%", sm: "auto" }, // Full width on extra-small screens
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
          marginBottom: { xs: 2, sm: 0 }, // Adds margin on smaller screens
        }}
        options={activities.filter((a) => a.id !== activity.id)}
        getOptionLabel={(option) => option.title}
        onChange={handleRelationshipChange}
        renderInput={(params) => (
          <TextField
            size="small"
            {...params}
            label="Relationship"
            fullWidth // Makes the TextField full width on smaller screens
          />
        )}
      />
      <Relationships activity={activity} getPriorityStyle={getPriorityStyle} />
    </Box>
  );
}
