import { Grid } from "@mui/material";
import boardStore from "../../../../store";

const colors = [
  "linear-gradient(to right, #ff7e5f, #feb47b)", // Warm sunset
  "linear-gradient(to right, #00c6ff, #0072ff)", // Cool ocean
  "linear-gradient(to right, #f7971e, #ffd200)", // Sunny day
  "linear-gradient(to right, #00f260, #0575e6)", // Green-blue wave
  "linear-gradient(to right, #e1eec3, #f05053)", // Soft morning
  "linear-gradient(to right, #9CECFB, #65C7F7, #0052D4)", // Blue gradient
  "linear-gradient(to right, #ffafbd, #ffc3a0)", // Peachy pink
  "linear-gradient(to right, #43cea2, #185a9d)", // Green and blue gradient
  "linear-gradient(to right, #f4e2d8, #ba5370)", // Pink and cream
  "linear-gradient(to right, #8E2DE2, #4A00E0)", // Purple dusk
];

export default function SelectColor() {
  const updateBucketColor = boardStore((state) => state.updateBucketColor);
  return (
    <div>
      <Grid container spacing={1} sx={{ p: 2 }}>
        {colors.map((color, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <div
              className="color-option"
              style={{
                background: color,
                cursor: "pointer",
                width: "100%",
                height: "100px",
                borderRadius: "8px",
                onClick: () => updateBucketColor(bucket.id, color),
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
