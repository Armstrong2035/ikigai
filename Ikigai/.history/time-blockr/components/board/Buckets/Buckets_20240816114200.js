"use client";
import React from "react";
import { useStore } from "zustand";
import boardStore from "../store";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Paper,
  Typography,
} from "@mui/material";
import Link from "next/link";
// import BucketTitle from "./BucketTitle";
// import Activities from "./activities/Activities";

export default function Buckets() {
  const buckets = boardStore((state) => state.buckets);

  return (
    <Grid container spacing={3}>
      {buckets.map((bucket) => (
        <Grid item lg={4} key={bucket.id}>
          <Link href={`/board/bucket/${bucket.id}`} passHref>
            <Paper>
              <Typography>{bucket.title}</Typography>
            </Paper>
          </Link>
          {/* <Card>
            <CardHeader
              title={<BucketTitle bucketId={bucket.id} title={bucket.title} bucket={bucket} />}
            />
            <CardContent>
              <Activities bucket={bucket} />
            </CardContent>
          </Card> */}
        </Grid>
      ))}
    </Grid>
  );
}
