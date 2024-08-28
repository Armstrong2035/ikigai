"use client";
import React from "react";
import { Container } from "@mui/material";
import AddBucket from "./Buckets/Bucket/AddBucket";
import Buckets from "./Buckets/Buckets";
export default function Board() {
  return (
    <>
      <div>
        <AddBucket />
        //add quick navigation
        <Container>
          <Buckets />
        </Container>
      </div>
    </>
  );
}
