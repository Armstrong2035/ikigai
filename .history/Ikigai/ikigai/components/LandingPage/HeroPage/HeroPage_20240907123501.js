import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { Container } from "@mui/material";

export default function HeroPage({ styles }) {
  return (
    <Container>
      <HeroText styles={styles} />
      <HeroImage styles={styles} />
    </Container>
  );
}
