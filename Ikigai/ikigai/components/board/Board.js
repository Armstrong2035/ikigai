"use client";
import React from "react";
import { Container } from "@mui/material";
import AddBucket from "./Buckets/Bucket/AddBucket";
import Buckets from "./Buckets/Buckets";
import boardStore from "./store";
import { useEffect } from 'react';
import { createInitialBuckets } from '../Authentication/Signup';

export default function Board() {
  const userData = boardStore((state) => state.userData)
  console.log(userData)

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      createInitialBuckets(userId);
      localStorage.removeItem('userId'); // Remove the ID after use
    }
  }, []);

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
