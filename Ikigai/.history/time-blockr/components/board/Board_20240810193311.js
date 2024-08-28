"use client";
import React from "react";
import boardStore from "../../../components/board/store";
import { useStore } from "zustand";

export default function Board() {
  const buckets = useStore((state) => state.buckets);
  const addBucket = useStore((state) => state.addBucket);
  const updateBucketTitle = useStore((state) => state.updateBucketTitle);

  const handleAddBucket = () => {
    const newBucket = {
      id: Date.now(),
      title: "",
      activities: [],
    };
    addBucket(newBucket);
  };

  return (
    <>
      <p>This is a board</p>
      <button onClick={handleAddBucket}>+</button>

      {buckets.map((bucket) => (
        <div key={bucket.id}>
          <form onSubmit={(e) => e.preventDefault()}>
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
