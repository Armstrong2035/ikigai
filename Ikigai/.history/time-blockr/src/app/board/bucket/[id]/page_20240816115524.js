"use client";

import { useRouter } from "next/router";
import boardStore from "../../../../../components/board/store";
import Bucket from "../../../../../components/board/Buckets/Bucket/Bucket";
import { useParams } from "next/navigation";

export default function BucketPage() {
  const params = useParams();
  const id = decodeURIComponent(params.id);

  const buckets = boardStore((state) => state.buckets);
  const bucket = buckets.find((bucket) => bucket.id === id);

  console.log(bucket);
  return (
    <>
      <Bucket bucket={bucket} />
    </>
  );
}
