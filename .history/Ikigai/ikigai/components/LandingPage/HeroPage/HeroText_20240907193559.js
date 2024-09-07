import { Grid, Typography } from "@mui/material";
import HeroButton from "./HeroButton";

export default function HeroText({ styles }) {
  return (
    <Grid
      container
      spacing={3}
      style={{ overflow: "hidden", maxWidth: "100%" }}
    >
      <Grid item sm={12}>
        <Typography style={styles.heading}>
          DO EVERYTHING <br /> THAT MATTERS TO YOU
        </Typography>
      </Grid>

      <Grid item sm={12}>
        <Typography style={styles.body}>
          The Ikigai app combines elements of the Eisenhower matrix, time
          blocking, and the pomodoro technique into a single framework that
          helps you juggle multiple responsibilites and interests.
        </Typography>
      </Grid>
    </Grid>
  );
}
