import React from "react";
import Activities from "../activities/Activities";
import BucketHeader from "./BucketHeader/BucketHeader";
import boardStore from "../../store";
import BucketTitle from "./BucketTitle/BucketTitle";
import { Stack } from "@mui/material";

export default function Bucket({ bucket }) {
  const updateBucketHeader = boardStore((state) => state.updateBucketHeader);

  return (
    <Stack justifyContent={"center"} alignItems={"center"} spacing={4}>
      <BucketHeader bucket={bucket} />
      <BucketTitle bucket={bucket} />
      <Activities bucket={bucket} />
    </Stack>
  );
}
