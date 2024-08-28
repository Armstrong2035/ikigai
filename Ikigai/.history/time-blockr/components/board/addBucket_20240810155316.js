"use client";
import { useState } from "react";
import React from "react";

export default function NewBucket() {
  const [bucketTitle, setBucketTitle] = useState("");

  //   const handleSubmit = (event) => {
  //     event.preventDefault
  //   }

  return (
    <div>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="name">Label this board:</label>
          <input
            type="text"
            id="name"
            bucketname="bucketname"
            required
            onChange={(e) => setBucketTitle(e.target.value)}
          />
        </div>
        <button type="submit">Done</button>
      </form>
    </div>
  );
}
