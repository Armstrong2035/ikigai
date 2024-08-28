import React from "react";
import Activities from "../activities/Activities";
import BucketHeader from "./BucketHeader/BucketHeader";
import boardStore from "../../store";
import BucketTitle from "./BucketTitle/BucketTitle";
import { Stack } from "@mui/material";

export default function Bucket({ bucket }) {
  const updateBucketHeader = boardStore((state) => state.updateBucketHeader);

  const handleHeaderChange = (newHeader) => {
    updateBucketHeader(bucket.id, newHeader);
  };

  return (
    <>
      <Stack spacing={3} alignItems={"center"} justifyContent={"center"}>
        <BucketHeader bucket={bucket} onHeaderChange={handleHeaderChange} />
        <BucketTitle bucket={bucket} />
        <Activities bucket={bucket} />
      </Stack>
    </>
  );
}
