"use client";
import React, { useState, useEffect } from "react"; // Added useEffect
import { useStore } from "zustand";
import boardStore from "../../../store";

export default function BucketTitle({ bucketId, bucket }) {
  const [title, setTitle] = useState(bucket.title);
  const updateBucketTitle = useStore(
    boardStore,
    (state) => state.updateBucketTitle
  );

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    updateBucketTitle(bucket.id, newTitle); // Use newTitle instead of title
  };

  console.log(bucket);

  return (
    <>
      <input
        type="text"
        required
        value={title}
        onChange={handleTitleChange}
        placeholder={title}
        style={{
          border: "none",
          color: "#CBD6D6",
          backgroundColor: "#191919",
          fontSize: "50px",
          textAlign: "center",
        }}
      />
    </>
  );
}
