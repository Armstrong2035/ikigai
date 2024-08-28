"use client";

import { useRouter } from "next/router";
import boardStore from "../../../../components/board/store";

export default function BucketPage() {
  const params = useParams();
  const id = params.id;

  const buckets = boardStore((state) => state.buckets);
  const bucket = buckets.find((bucket) => bucket.id === parseInt(id));
  return (
    <>
      <Bucket bucket={bucket} />
    </>
  );
}
