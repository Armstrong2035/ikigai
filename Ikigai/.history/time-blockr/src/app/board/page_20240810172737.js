"use client";
import React, { useState } from "react";
import NewBucket from "../../../components/board/addBucket";

export default function Board() {
  const [buckets, setBuckets] = useState([]);

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
      buckets.map((bucket) => {
        bucket.id === id ? { ...bucket, title: newTitle } : bucket;
      })
    );
  };
  return (
    <>
      <p>This is a board</p>
      <button onClick={addBucket}>+</button>

      {buckets.map((bucket) => (
        <div key={`${form.id}`}>
          <form>
            <input
              type="text"
              required
              id="buckettitle"
              value={bucket.title}
              onChange={updateBucketTitle(bucket.id, e.target.value)}
            />
          </form>
        </div>
      ))}
    </>
  );
}
