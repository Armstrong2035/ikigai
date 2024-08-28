"use client";
import React, { useState } from "react";
import boardStore from "./store";

export default function Activities() {
  const buckets = useStore(bucketStore, (state) => state.buckets);
  const addActivity = useStore(bucketStore, (state) => state.addActivity);

  const [activity, setActivity] = useState({
    title: "",
    tasks: [{}],
    relationships: [],
    stats: [{}],
  });
}
