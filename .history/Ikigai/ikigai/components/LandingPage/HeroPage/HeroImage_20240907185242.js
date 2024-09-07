import { Grid, Stack } from "@mui/material";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div style={{ backgroundColor: "#333333" }}>
      <video autoPlay loop muted playsInline style={{ width: "100%" }}>
        <source src="/videos/ikigai-recording.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
