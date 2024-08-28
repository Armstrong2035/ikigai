"use client";
import React, { useState } from "react";
import NewBucket from "../../../components/board/addBucket";

export default function Board() {
  const [buckets, setBuckets] = useState([]);

  console.log(buckets);

  const addBucket = () => {
    setBuckets([
      ...buckets,
      {
        id: Date.now(),
        title: "",
        activities: [],
      },
    ]);
  };

  const updateBucketTitle = (id, newTitle) => {
    setBuckets(
      buckets.map((bucket) =>
        bucket.id === id ? { ...bucket, title: newTitle } : bucket
      )
    );
  };
  return (
    <>
      <p>This is a board</p>
      <button onClick={addBucket}>+</button>

      {buckets.map((bucket) => (
        <div key={`${bucket.id}`}>
          <form onSubmit={(e) => e.preventDefault}>
            <input
              type="text"
              required
              id="buckettitle"
              //   value={bucket.title}
              onChange={(e) => updateBucketTitle(bucket.id, e.target.value)}
              placeholder="Bucket title"
            />
          </form>
        </div>
      ))}
    </>
  );
}
