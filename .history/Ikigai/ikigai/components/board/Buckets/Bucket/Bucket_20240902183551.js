import React from "react";
import Activities from "../activities/Activities";
import BucketHeader from "./BucketHeader/BucketHeader";
import boardStore from "../../store";
import BucketTitle from "./BucketTitle/BucketTitle";
import { IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function Bucket({ bucket }) {
  const updateBucketHeader = boardStore((state) => state.updateBucketHeader);

  return (
    <div style={{ overflow: "hidden" }}>
      <Stack justifyContent={"center"} alignItems={"center"} spacing={4}>
        <IconButton>
          <ArrowBackIosNewIcon />
        </IconButton>

        <BucketHeader bucket={bucket} />
        <BucketTitle bucket={bucket} />
        <Activities bucket={bucket} />
      </Stack>
    </div>
  );
}
