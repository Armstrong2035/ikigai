"use client";
import React from "react";
import { useStore } from "zustand";
import boardStore from "../store";
import { Grid, Card, CardHeader, CardContent } from "@mui/material";
import BucketTitle from "./BucketTitle";
import Activities from "./activities/Activities";

export default function Buckets() {
  const buckets = useStore(boardStore, (state) => state.buckets);

  return (
    <Grid container spacing={3}>
      {buckets.map((bucket) => (
        <Grid item lg={4} key={bucket.id}>
          <Card>
            <CardHeader
              title={<BucketTitle bucketId={bucket.id} title={bucket.title} />}
            />
            <CardContent>
              <Activities bucketId={bucket.id} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
