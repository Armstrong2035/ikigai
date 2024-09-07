import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function HeroPage({ styles }) {
  return (
    <Stack>
      <HeroText styles={styles} />
      <HeroImage styles={styles} />
    </Stack>
  );
}
