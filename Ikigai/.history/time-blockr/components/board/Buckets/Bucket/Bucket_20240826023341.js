import Activities from "../activities/Activities";
import BucketHeader from "./BucketHeader/BucketHeader";

export default function Bucket({ bucket }) {
  return (
    <>
      <BucketHeader />
      <Activities bucket={bucket} />
    </>
  );
}
