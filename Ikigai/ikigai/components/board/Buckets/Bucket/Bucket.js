import React from "react";
import Activities from "../activities/Activities";
import BucketHeader from "./BucketHeader/BucketHeader";
import boardStore from "../../store";
import BucketTitle from "./BucketTitle/BucketTitle";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Link from "next/link";
import BackToBoard from "./BackToBoard";

export default function Bucket({ bucket }) {
  const updateBucketHeader = boardStore((state) => state.updateBucketHeader);

  console.log(bucket)
  return (
    <div style={{ overflow: "hidden" }}>
      <BackToBoard />

      <Stack justifyContent={"center"} alignItems={"center"} spacing={4}>
        <BucketHeader bucket={bucket} />
        <BucketTitle bucket={bucket} />
        <Activities bucket={bucket} />
      </Stack>
    </div>
  );
}
