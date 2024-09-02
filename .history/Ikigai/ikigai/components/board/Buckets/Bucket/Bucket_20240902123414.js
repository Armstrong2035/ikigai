import React from "react";
import Activities from "../activities/Activities";
import BucketHeader from "./BucketHeader/BucketHeader";
import boardStore from "../../store";
import BucketTitle from "./BucketTitle/BucketTitle";
import { Stack, Box, Grid } from "@mui/material";

export default function Bucket({ bucket }) {
  const updateBucketHeader = boardStore((state) => state.updateBucketHeader);

  return (
    <Box>
      <Grid container spacing={4}>
        <Grid item lg={12} sm={12} xs={12}>
          <BucketHeader bucket={bucket} />
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <BucketTitle bucket={bucket} />
        </Grid>
        <Grid item lg={12} sm={12} xs={12}>
          <Activities bucket={bucket} />
        </Grid>
      </Grid>
    </Box>
  );
}