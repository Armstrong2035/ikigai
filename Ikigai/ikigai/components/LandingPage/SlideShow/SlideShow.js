import React, { useState } from "react";
import { Box, Card, IconButton, Paper, Stack } from "@mui/material";
import ikigaiBucket from "../../../public/images/ikigai-bucket.png";
import ikigaiDashboard from "../../../public/images/ikigai-dashboard.png";
import ikigaiTimeBlock from "../../../public/images/ikigai-time-block.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2";

export default function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [ikigaiDashboard, ikigaiBucket, ikigaiTimeBlock];
  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <IconButton>
          <ArrowBackIosIcon
            size={"large"}
            onClick={prevPhoto}
            sx={{ color: "white" }}
          />
        </IconButton>

        <Image
          src={photos[currentIndex]}
          alt={`Photo ${currentIndex + 1}`}
          layout="responsive"
          quality={100}
        />
        <IconButton sx={{ color: "white" }}>
          <ArrowForwardIosIcon size={"large"} onClick={nextPhoto} />
        </IconButton>
      </Stack>
    </Box>
  );
}
