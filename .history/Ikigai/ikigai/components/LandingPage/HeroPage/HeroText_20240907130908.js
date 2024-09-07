import { Grid, Typography } from "@mui/material";

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
          The Ikigai app borrows from the Eisenhower matrix, time blocking, and
          the pomodoro technique <br />
          to help you juggle multiple responsibilites and interests.
        </Typography>
      </Grid>
      <Grid item lg={12}></Grid>
    </Grid>
  );
}
