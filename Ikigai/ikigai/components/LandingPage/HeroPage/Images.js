import { Masonry } from "@mui/lab";
//import photos from "./../SlideShow/SlideShow";
import Image from "next/image";

import ikigaiBucket from "../../../public/images/ikigai-bucket.png";
import ikigaiDashboard from "../../../public/images/ikigai-dashboard.png";
import ikigaiTimeBlock from "../../../public/images/ikigai-time-block.png";

export default function Images() {
  const photos = [ikigaiBucket, ikigaiTimeBlock, ikigaiDashboard];
  return (
    <Masonry columns={3} spacing={2}>
      {photos.map((photo) => (
        <Image src={photo} alt={`${photo}`} layout="responsive" quality={100} />
      ))}
    </Masonry>
  );
}
