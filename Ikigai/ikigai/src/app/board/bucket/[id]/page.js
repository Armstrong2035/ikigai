"use client";

import { useParams } from "next/navigation";
import boardStore from "../../../../../components/board/store";
import Bucket from "../../../../../components/board/Buckets/Bucket/Bucket";

export default function BucketPage() {
  const params = useParams();
  const id = decodeURIComponent(params.id);

  const buckets = boardStore((state) => state.buckets);
  console.log(buckets)
  const bucket = buckets.find((bucket) => bucket.id === id);
  console.log(bucket)
  console.log("Found bucket:", bucket);

  if (!bucket) {
     return <div>Bucket not found for ID: {id}</div>;
   }

  return <Bucket bucket={bucket} />;
}
