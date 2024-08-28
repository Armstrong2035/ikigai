"use client";
import React, { useState } from "react";
import NewBucket from "../../../components/board/Board.js";
import boardStore from "../../../components/board/store.js";

export default function Board() {
  const [bucket, setBucket] = useState({});

  const addNewBucket = useStore((state) => state.addNewBucket);

  //   console.log(buckets);

  const addBucket = async () => {
    const newBucket = {
      id: Date.now(),
      title: "",
      activities: [],
    };
    await addNewBucket(newBucket);
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
              value={bucket.title}
              onChange={(e) => updateBucketTitle(bucket.id, e.target.value)}
              placeholder="Bucket title"
            />

            <button type="submit">check</button>
          </form>
        </div>
      ))}
    </>
  );
}
