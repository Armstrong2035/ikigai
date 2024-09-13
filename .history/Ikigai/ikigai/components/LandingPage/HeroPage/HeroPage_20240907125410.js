import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { Box, Grid } from "@mui/material";
export default function HeroPage({ styles }) {
  return (
    <div style={{ marginLeft: 5 }}>
      <Grid container>
        <Grid item lg={6} sm={12}>
          <HeroText styles={styles} />
        </Grid>
        {/* <Grid item lg={6} sm={12}>
          <HeroImage styles={styles} />{" "}
        </Grid> */}
      </Grid>
    </div>
  );
}