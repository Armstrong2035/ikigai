"use client";
import { useState } from "react";
import React from "react";

export default function NewBucket() {
  const [bucketTitle, setBucketTitle] = useState("");
  const handleSubmit = (formData) => {
    console.log(formData);
    const bucketName = formData.get("bucketName");

    console.log(`${bucketName}`);
  };

  return (
    <div>
      <form action={handleSubmit}>
        <div>
          <label htmlFor="name">Label this board:</label>
          <input type="text" id="name" bucketname="bucketname" required />
        </div>
        <button type="submit">Done</button>
      </form>
    </div>
  );
}
