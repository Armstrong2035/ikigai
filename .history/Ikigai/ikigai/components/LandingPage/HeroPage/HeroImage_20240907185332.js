import { Grid, Stack } from "@mui/material";
import Image from "next/image";

export default function HeroImage() {
  return (
    <Box style={{ backgroundColor: "#333333" }}>
      <div style={{ width: "80%", height: "80%" }}>
        <video autoPlay loop muted playsInline style={{ width: "100%" }}>
          <source src="/videos/ikigai-recording.mp4" type="video/mp4" />
        </video>
      </div>
    </Box>
  );
}
