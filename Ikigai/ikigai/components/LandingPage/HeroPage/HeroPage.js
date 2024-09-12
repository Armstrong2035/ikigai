import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { Box, Grid } from "@mui/material";
import HeroButton from "./HeroButton";

export default function HeroPage({ styles }) {
  return (
    <Box sx={{ ml: 5, mr: 10, mt: 10, }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        // Add full height to grid container
      >
        <Grid item lg={6} sm={12}>
          <Grid
            container
            spacing={5}
            direction="column"
            justifyContent="center"
            
          >
            <Grid item>
              <HeroText styles={styles} />
            </Grid>

            <Grid item lg={12}>
              <HeroButton />
            </Grid>
          </Grid>
        </Grid>

        <Grid item lg={6} sm={12}>
          <HeroImage styles={styles} />
        </Grid>
      </Grid>
    </Box>
  );
}