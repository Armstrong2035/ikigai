import React, { useState } from "react";
import { useStore } from "zustand";
import boardStore from "../../../store";

const AddRelationship = ({ activity }) => {
  const addRelationship = boardStore((state) => state.AddRelationship);
  const relationships = boardStore((state) => state.relationships);
  const [activity2, setActivity2] = useState();

  const handleRelationshipChange = (activity1, activity2) => {
    const newRelationship = {
      id: `${Date.now()}`,
      activity1: {
        id: activity.id,
        title: activity.title,
      },
      activity2: {
        id: activityId,
        title: activity2.title,
      },
    };

    addRelationship;
  };

  return (
    <>
      <FormGroup>
        {activities.map((act) => (
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
