"use client";
import React from "react";
import boardStore from "./store";
import { useStore } from "zustand";
import { IconButton, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
      <div>
        <IconButton onClick={handleAddBucket}>
          <AddIcon />
        </IconButton>

        <Box>
          {buckets.map((bucket) => (
            <Card key={bucket.id}>
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
            </Card>
          ))}
        </Box>
      </div>
    </>
  );
}
