"use client";

import { useRouter } from "next/router";
import boardStore from "../../../../components/board/store";

export default function page() {
  const router = useRouter();
  const bucketId = router.query;

  const buckets = boardStore((state) => state.buckets);
  const bucket = buckets.find((bucket) => bucketId === parseInt(bucket.id));
  return (
    <>
      <Bucket />
    </>
  );
}
