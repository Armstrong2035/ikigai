import React from "react";
import Activities from "../activities/Activities";
import BucketHeader from "./BucketHeader/BucketHeader";
import boardStore from "../../store";
import BucketTitle from "./BucketTitle/BucketTitle";
import { Stack } from "@mui/material";

export default function Bucket({ bucket }) {
  const updateBucketHeader = boardStore((state) => state.updateBucketHeader);

  return (
    <div style={{ display: "flex", direction: "row" }}>
      <BucketHeader bucket={bucket} />
      <BucketTitle bucket={bucket} />
      <Activities bucket={bucket} />
    </div>
  );
}
