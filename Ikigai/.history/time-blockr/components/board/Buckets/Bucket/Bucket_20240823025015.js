import Activities from "../activities/Activities";

export default function Bucket({ bucket }) {
  return (
    <>
      <BucketHeader />
      <Activities bucket={bucket} />
    </>
  );
}
