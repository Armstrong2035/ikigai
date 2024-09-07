import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

export default function HeroPage({ styles }) {
  return (
    <>
      <Grid container>
        <Grid item></Grid>
        <Grid item> </Grid>
      </Grid>
      <HeroText styles={styles} />
      <HeroImage styles={styles} />
    </>
  );
}
