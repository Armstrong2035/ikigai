import { Grid, Stack, Box } from "@mui/material";
import Image from "next/image";

export default function HeroImage() {
  return (
    <Box
      style={{
        backgroundColor: "#333333",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid blue",
        padding: "5px 10px",
      }}
    >
      <video autoPlay loop muted playsInline style={{ width: "100%" }}>
        <source src="/videos/ikigai-recording.mp4" type="video/mp4" />
      </video>
    </Box>
  );
}
