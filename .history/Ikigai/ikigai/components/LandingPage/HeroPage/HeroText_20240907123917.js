import { Grid, Typography } from "@mui/material";

export default function HeroText({ styles }) {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h2" style={styles.heading}>
          Do everything that matters to you
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="p" style={styles.body}>
          The Ikigai app combines elements of the Eisenhower matrix, time
          blocking, and the pomodoro technique to help you juggle multiple
          responsibilites and interests
        </Typography>
      </Grid>
    </Grid>
  );
}
