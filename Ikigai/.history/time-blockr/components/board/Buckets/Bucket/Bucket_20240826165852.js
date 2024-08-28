import React from "react";
import Activities from "../activities/Activities";
import BucketHeader from "./BucketHeader/BucketHeader";
import boardStore from "../../store";

export default function Bucket({ bucket }) {
  const updateBucketHeader = boardStore((state) => state.updateBucketHeader);

  const handleHeaderChange = (newHeader) => {
    updateBucketHeader(bucket.id, newHeader);
  };

  return (
    <>
      <BucketHeader bucket={bucket} onHeaderChange={handleHeaderChange} />
      <Activities bucket={bucket} />
    </>
  );
}
