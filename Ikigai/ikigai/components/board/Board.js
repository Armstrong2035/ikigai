"use client";
import React, { useEffect } from "react";
import { Container, Stack } from "@mui/material";
import AddBucket from "./Buckets/Bucket/AddBucket";
import Buckets from "./Buckets/Buckets";
import boardStore from "./store";
import {
  db,
  collection,
  doc,
  addDoc,
  auth,
} from "../../utils/firebase/firebase"; // Firebase imports
import { updateUserData } from "../../utils/firebase/updateData";
import { getUserData } from "../../utils/firebase/retrieveData";
import { onAuthStateChanged } from "firebase/auth";
import Dashboard from "./dashboard/Dashboard";
export default function Board() {
  //const userData = boardStore((state) => state.userData); // Get user data from store
  const buckets = boardStore((state) => state.buckets); // Get hardcoded buckets list from store
  const userData = boardStore((state) => state.userData);

  const user =
    auth.currentUser /
    //console.log(user)
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          buckets.map((individualBucket) => {
            const data = individualBucket;
            const itemId = individualBucket.id;
            //updateUserData(user.uid, `buckets`, data, itemId);
          });
        }
        // console.log(user)
      });
    }, [buckets]);
  //console.log(buckets);
  return (
    <>
      <div>
        {/* <AddBucket /> */}
        <Container>
          <Stack spacing={3}>
            <Buckets />
            <Dashboard />
          </Stack>
        </Container>
      </div>
    </>
  );
}
