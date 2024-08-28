"use client";
import React from "react";
import { Container } from "@mui/material";
import AddBucket from "./AddBucket";
import Buckets from "./Buckets";

export default function Board() {
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
