import React, { useState, useEffect } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import ikigaiBucket from "../../../public/images/ikigai-bucket.png";
import ikigaiDashboard from "../../../public/images/ikigai-dashboard.png";
import ikigaiTimeBlock from "../../../public/images/ikigai-time-block.png";

export const photos = [ikigaiDashboard, ikigaiBucket, ikigaiTimeBlock];

export default function SlideShow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [tiltAngle, setTiltAngle] = useState(15); // Initial tilt angle

  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Update tilt angle based on scroll
    const handleScroll = () => {
      // Get the scroll position
      const scrollPosition = window.scrollY;
      // Calculate tilt angle: as scroll goes up, increase angle; as it goes down, reduce it
      const newTiltAngle = Math.max(0, 15 - scrollPosition * 0.05); // Limits the tilt to 0-15 degrees
      setTiltAngle(newTiltAngle);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ mt: 5, backgroundColor: "#0D0D0D" }}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <IconButton onClick={prevPhoto}>
          <ArrowBackIosIcon size={"large"} sx={{ color: "#FFFFFF" }} />
        </IconButton>

        {/* Apply tilt transform based on tiltAngle */}
        <Box
          sx={{
            transform: `perspective(800px) rotateX(${tiltAngle}deg)`,
            transition: "transform 0.2s ease-out", // Smooth transition for tilt
          }}
        >
          <Image
            src={photos[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            layout="responsive"
            quality={100}
          />
        </Box>

        <IconButton onClick={nextPhoto} sx={{ color: "#FFFFFF" }}>
          <ArrowForwardIosIcon size={"large"} />
        </IconButton>
      </Stack>
    </Box>
  );
}
