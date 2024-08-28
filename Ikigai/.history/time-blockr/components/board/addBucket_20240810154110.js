"use client";
import { useState } from "react";
import React from "react";

export default function addBucket() {
  const [bucketName, setBucketName] = useState("");

  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" id="name" name="name" required />
    </div>
  );
}
