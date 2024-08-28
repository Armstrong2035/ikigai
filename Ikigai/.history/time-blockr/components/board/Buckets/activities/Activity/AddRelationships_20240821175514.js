import React, { useState } from "react";
import { useStore } from "zustand";
import boardStore from "../../../store";

const AddRelationship = ({ activityId }) => {
  const { activities, addRelationship } = useStore(boardStore);

  const [selectedRelationship, setSelectedRelationship] = useState("");

  // Filter out the current activity from the list of activities to show only other activities
  const otherActivities = activities.filter(
    (activity) => activity.id !== activityId
  );

  const handleRelationshipChange = (e) => {
    setSelectedRelationship(e.target.value);
  };

  const handleAddRelationship = () => {
    if (selectedRelationship) {
      addRelationship(activityId, selectedRelationship);
      setSelectedRelationship("");
    }
  };

  return (

  );
};

export default AddRelationship;
