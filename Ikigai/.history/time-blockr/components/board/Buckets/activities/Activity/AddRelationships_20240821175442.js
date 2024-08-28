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
    <div>
      <h3>Add Relationship</h3>
      <select value={selectedRelationship} onChange={handleRelationshipChange}>
        <option value="">Select an activity</option>
        {otherActivities.map((activity) => (
          <option key={activity.id} value={activity.id}>
            {activity.title}
          </option>
        ))}
      </select>
      <button onClick={handleAddRelationship}>Add Relationship</button>
    </div>
  );
};

export default AddRelationship;
