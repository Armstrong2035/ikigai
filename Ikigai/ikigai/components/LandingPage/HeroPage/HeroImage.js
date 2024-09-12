import { Grid } from "@mui/material";

export default function HeroImage() {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#333333",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid item>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%" }}
        >
          <source src="/videos/ikigai-recording.mp4" type="video/mp4" />
        </video>
      </Grid>
    </Grid>
  );
}
