import React from "react";
import Activities from "../activities/Activities";
import BucketHeader from "./BucketHeader/BucketHeader";
import boardStore from "../../store";
import BucketTitle from "./BucketTitle/BucketTitle";

export default function Bucket({ bucket }) {
  const updateBucketHeader = boardStore((state) => state.updateBucketHeader);

  const handleHeaderChange = (newHeader) => {
    updateBucketHeader(bucket.id, newHeader);
  };

  return (
    <>
      <Stack>
        <BucketHeader bucket={bucket} onHeaderChange={handleHeaderChange} />
        <BucketTitle bucket={bucket} />
        <Activities bucket={bucket} />
      </Stack>
    </>
  );
}
