"use client";
import React, { useState } from "react";
import NewBucket from "../../../components/board/addBucket";

export default function Board() {
  const [openBucket, setOpenBucket] = useState(false);
  const [buckets, setBuckets] = useState([]);

  const addBucket = () => {
    [
      ...buckets,
      {
        title,
        activities: [],
      },
    ];
  };
  return (
    <>
      <p>This is a board</p>
      <button onClick={() => setOpenBucket(true)}>+</button>
    </>
  );
}
