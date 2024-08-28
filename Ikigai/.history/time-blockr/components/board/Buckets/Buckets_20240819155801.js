"use client";
import React, { useState } from "react";

import boardStore from "../store";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Paper,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import Link from "next/link";
import BucketTitle from "./Bucket/BucketTitle/BucketTitle";
import ColorPicker from "./Bucket/BucketColor/BucketColor";
import EditIcon from "@mui/icons-material/Edit";
// import Activities from "./activities/Activities";

export default function Buckets() {
  const [editMode, setEditMode] = useState(false);
  const buckets = boardStore((state) => state.buckets);

  return (
    <Grid container spacing={3}>
      {buckets.map((bucket) => (
        <Grid item lg={4} md={6} sm={12} key={bucket.id}>
          <Paper sx={{ minHeight: "40vh", backgroundColor: `${bucket.color}` }}>
            {editMode ? (
               <IconButton>
               <CheckIcon onClick={() => setEditMode(false)} />
             </IconButton>
              <div>
                <BucketTitle
                  bucketId={bucket.id}
                  title={bucket.title}
                  bucket={bucket}
                  style={{ width: "100%" }}
                />

                <ColorPicker />
              </div>

            ) : (
              <Stack>
                <IconButton>
                  <EditIcon onClick={() => setEditMode(true)} />
                </IconButton>
                <Typography>{bucket.title}</Typography>
              </Stack>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

{
  /* <Link
            href={`/board/bucket/${encodeURIComponent(bucket.id)}`}
            passHref
            style={{ textDecoration: "none" }}
          > */
}
{
  /* </Link> */
}
