"use client";
import React from "react";

export default function Board() {
  return (
    <>
      <p>This is a board</p>
      <div>
        <label htmlFor="name">Enter your name:</label>
        <input type="text" id="name" name="name" required />
      </div>
    </>
  );
}
