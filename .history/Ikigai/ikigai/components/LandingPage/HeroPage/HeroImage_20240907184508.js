import { Grid, Stack } from "@mui/material";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div>
      <video autoPlay loop muted playsInline>
        <source src="/videos/ikigai-recording.mp4" type="video/mp4" />
      </video>
    </div>
  );
}