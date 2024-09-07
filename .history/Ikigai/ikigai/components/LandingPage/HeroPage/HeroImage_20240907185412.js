import { Grid, Stack, Box } from "@mui/material";
import Image from "next/image";

export default function HeroImage() {
  return (
    <Box alignItems={"center"} style={{ backgroundColor: "#333333" }}>
      <Box style={{ width: "80%", height: "80%" }}>
        <video autoPlay loop muted playsInline style={{ width: "100%" }}>
          <source src="/videos/ikigai-recording.mp4" type="video/mp4" />
        </video>
      </Box>
    </Box>
  );
}
