"use client";
import React from "react";
import NewBucket from "../../../components/board/addBucket";

export default function Board() {
  const [openBucket, setOpenBucket] = useState(false);
  return (
    <>
      <p>This is a board</p>
      <button onClick={() => setOpenBucket(true)}>+</button>
      {openBucket && <NewBucket />}
    </>
  );
}
