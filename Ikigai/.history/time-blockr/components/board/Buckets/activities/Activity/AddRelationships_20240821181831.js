import React, { useState } from "react";
import { useStore } from "zustand";
import boardStore from "../../../store";

const AddRelationship = ({ activityId }) => {
  return (
    <>
      <FormGroup>
        {allActivities.map((act) => (
          <FormControlLabel
            key={act.id}
            control={
              <Checkbox
                checked={relationships.some((rel) => rel.id === act.id)}
                onChange={(e) => handleRelationshipChange(e, act)}
              />
            }
            label={act.title}
          />
        ))}
      </FormGroup>
    </>
  );
};

export default AddRelationship;
