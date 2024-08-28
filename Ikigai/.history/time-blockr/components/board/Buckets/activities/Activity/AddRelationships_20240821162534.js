import React, { useState } from "react";
import boardStore from "../../../store";

const AddRelationship = ({ bucketId, activityId }) => {
  const { buckets, addRelationship } = useStore(boardStore);

  const [selectedRelationship, setSelectedRelationship] = useState("");

  const currentBucket = buckets.find((bucket) => bucket.id === bucketId);
  const otherActivities = currentBucket.activities.filter(
    (activity) => activity.id !== activityId
  );

  const handleRelationshipChange = (e) => {
    setSelectedRelationship(e.target.value);
  };

  const handleAddRelationship = () => {
    if (selectedRelationship) {
      const relationship = { id: selectedRelationship, type: "related" };
      addRelationship(bucketId, activityId, relationship);
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
