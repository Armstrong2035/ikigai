"use client";
import React from "react";
import { useStore } from "zustand";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import boardStore from "../../store";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export default function AddBucket() {
  const addBucket = boardStore((state) => state.addBucket);

  const handleAddBucket = async () => {
    const newBucket = {
      id: `${Date.now()}`,
      title: "New Bucket",
      headerImage: "",
      icon: "",
      activities: [],
    };

    // Add to local state
    addBucket(newBucket);

    // Add to Firestore
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const db = getFirestore();
        const userBucketsRef = collection(db, "users", user.uid, "buckets");
        const docRef = await addDoc(userBucketsRef, newBucket);
        console.log("Bucket added with ID: ", docRef.id);
      } else {
        console.error("No user is signed in.");
      }
    } catch (error) {
      console.error("Error adding bucket to Firestore: ", error);
    }
  };

  return (
    <IconButton onClick={handleAddBucket}>
      <AddIcon sx={{ color: "#CBD6D6" }} />
    </IconButton>
  );
}
