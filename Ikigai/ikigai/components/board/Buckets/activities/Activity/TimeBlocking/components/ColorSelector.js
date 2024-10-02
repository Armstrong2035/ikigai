import { Grid, Typography } from "@mui/material";
export default function ColorSelector({
  handleColorChange,
  formData,
  currentTimeblock,
}) {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={6}
        container
        spacing={2}
        direction="row"
        alignItems="center"
      >
        <Grid item>
          <Typography sx={{ color: "#CBD6D6" }}>
            Select a color for this timeblock:
          </Typography>
        </Grid>
        <Grid item>
          <input
            type="color"
            name="time-block-color"
            value={currentTimeblock.color}
            onChange={(e) => handleColorChange(e.target.value)}
            style={{
              width: "40px",
              height: "40px",
              padding: "0",
              border: "2px solid #CBD6D6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            aria-label="Choose timeblock color"
            required
          />
        </Grid>
      </Grid>
    </>
  );
}
