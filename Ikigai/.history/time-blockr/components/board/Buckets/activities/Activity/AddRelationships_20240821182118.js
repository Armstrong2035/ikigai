import React, { useState } from "react";
import { useStore } from "zustand";
import boardStore from "../../../store";

const AddRelationship = ({ activityId }) => {
  const [activity2, setActivity2] = useState();

  const newRelationship = {
    id: `${Date.now()}`,
    activity1: {
      id: activityId,
      title: activity1.title,
    },
    activity2: {
      id: activityId,
      title: activity2.title,
    },
  };
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
