import React from "react";
import Activities from "../activities/Activities";
import BucketHeader from "./BucketHeader/BucketHeader";
import boardStore from "../../store";
import BucketTitle from "./BucketTitle/BucketTitle";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Link from "next/link";

export default function Bucket({ bucket }) {
  const updateBucketHeader = boardStore((state) => state.updateBucketHeader);

  return (
    <div style={{ overflow: "hidden" }}>
      <Link href={`/board`}>
        <IconButton sx={{ color: "#CBD6D6" }}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Link>
      <Stack justifyContent={"center"} alignItems={"center"} spacing={4}>
        <BucketHeader bucket={bucket} />
        <BucketTitle bucket={bucket} />
        <Activities bucket={bucket} />
      </Stack>
    </div>
  );
}
