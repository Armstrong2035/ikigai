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
  return (
    <>
      <p>This is a board</p>
      <button onClick={addBucket}>+</button>

      {buckets.map((bucket) => (
        <div>
          <form>
            <input type="text" required id="buckettitle">
              Bucket title
            </input>
          </form>
        </div>
      ))}
    </>
  );
}
