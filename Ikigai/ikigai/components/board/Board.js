"use client";
import React from "react";
import { Container } from "@mui/material";
import AddBucket from "./Buckets/Bucket/AddBucket";
import Buckets from "./Buckets/Buckets";
import boardStore from "./store";
export default function Board() {

  const userData = boardStore((state) => state.userData)
  console.log(userData)
  return (
    <>
      <div>
        <AddBucket />
        <Container>
          <Buckets />
        </Container>
      </div>
    </>
  );
}
