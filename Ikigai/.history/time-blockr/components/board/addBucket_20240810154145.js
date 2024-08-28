"use client";
import { useState } from "react";
import React from "react";

export default function NewBucket() {
  const [bucketName, setBucketName] = useState("");

  return (
    <div>
      <label htmlFor="name">Label this board:</label>
      <input type="text" id="name" name="name" required />
    </div>
  );
}
