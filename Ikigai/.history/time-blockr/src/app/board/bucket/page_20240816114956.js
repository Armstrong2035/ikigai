"use client";

import { useRouter } from "next/router";
import boardStore from "../../../../components/board/store";
import { useParams } from "next/navigation";

export default function BucketPage() {
  const params = useParams();
  const id = decodeURIComponent(params.id);

  console.log(id);
  const buckets = boardStore((state) => state.buckets);
  const bucket = buckets.find((bucket) => bucket.id === id);
  return (
    <>
      <Bucket bucket={bucket} />
    </>
  );
}
