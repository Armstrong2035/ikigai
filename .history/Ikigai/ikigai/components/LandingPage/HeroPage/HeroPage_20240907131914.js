import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import { Box, Grid, Stack } from "@mui/material";
import HeroButton from "./HeroButton";
export default function HeroPage({ styles }) {
  return (
    <Box sx={{ ml: 5, mt: 25 }}>
      <Grid container>
        <Grid item lg={6} sm={12}>
          <Stack>
            <HeroText styles={styles} />

            <Grid item lg={12}>
              <HeroButton />
            </Grid>
          </Stack>
        </Grid>

        <Grid item lg={6} sm={12}>
          <HeroImage styles={styles} />{" "}
        </Grid>
      </Grid>
    </Box>
  );
}
