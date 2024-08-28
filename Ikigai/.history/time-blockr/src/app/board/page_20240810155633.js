"use client";
import React from "react";
import NewBucket from "../../../components/board/addBucket";

export default function Board() {
  return (
    <>
      <p>This is a board</p>
      <button
        onClick={() => {
          return <NewBucket />;
        }}
      >
        +
      </button>
    </>
  );
}
