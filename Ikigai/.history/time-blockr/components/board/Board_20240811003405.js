"use client";
import React from "react";
import boardStore from "./store";
import { useStore } from "zustand";
import "./styles/styles";

export default function Board() {
  const buckets = useStore(boardStore, (state) => state.buckets);
  const addBucket = useStore(boardStore, (state) => state.addBucket);
  const updateBucketTitle = useStore(
    boardStore,
    (state) => state.updateBucketTitle
  );

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

      <div id="board-body">
        {buckets.map((bucket) => (
          <div key={bucket.id} id="bucket">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                required
                id="buckettitle"
                value={bucket.title}
                onChange={(e) => updateBucketTitle(bucket.id, e.target.value)}
                placeholder="Bucket title"
              />
              <button type="submit">Done</button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}
