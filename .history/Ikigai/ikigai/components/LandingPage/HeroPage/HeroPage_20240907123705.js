import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { Grid } from "@mui/material";
export default function HeroPage({ styles }) {
  return (
    <>
      <Grid container>
        <Grid item lg={}>
          <HeroText styles={styles} />
        </Grid>
        <Grid item>
          <HeroImage styles={styles} />{" "}
        </Grid>
      </Grid>
    </>
  );
}
