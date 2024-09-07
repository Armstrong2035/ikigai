import { Grid } from "@mui/material";

export default function HeroText({ styles }) {
  return (
    <Grid>
      <h2 style={styles.heading}>Do everything that matter to you</h2>
      <p style={styles.body}>
        The Ikigai app combines elements of the Eisenhower matrix, time
        blocking, and the pomodoro technique to help you juggle multiple
        responsibilites and interests
      </p>
    </Grid>
  );
}
