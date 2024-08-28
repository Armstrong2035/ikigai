import React from "react";

export default function Activities() {
  return (
    <>
      {bucket.activities.map((activity) => (
        <Activitiy bucketId={bucket.id} activityId={activity.id} />
      ))}
    </>
  );
}
