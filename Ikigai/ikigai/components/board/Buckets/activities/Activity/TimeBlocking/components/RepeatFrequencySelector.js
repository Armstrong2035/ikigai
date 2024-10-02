import {
  RadioGroup,
  Stack,
  FormControlLabel,
  Radio,
  Grid,
} from "@mui/material";
export default function RepeatFrequencySelector({
  formData,
  handleRepeatEveryChange,
}) {
  return (
    <>
      <Grid item xs={12}>
        <RadioGroup
          required
          aria-label="repeat frequency"
          name="repeatEvery"
          value={formData.repeatEvery}
          onChange={(e) => handleRepeatEveryChange(e.target.value)}
        >
          <Stack direction="row">
            <FormControlLabel
              value="Month"
              control={
                <Radio
                  sx={{ color: "white", "&.Mui-checked": { color: "#CBD6D6" } }}
                />
              }
              label={<span style={{ color: "white" }}>Month</span>}
            />
            <FormControlLabel
              value="Week"
              control={
                <Radio
                  sx={{
                    color: "#CBD6D6",
                    "&.Mui-checked": { color: "#CBD6D6" },
                  }}
                />
              }
              label={<span style={{ color: "#CBD6D6" }}>Week</span>}
            />
          </Stack>
        </RadioGroup>
      </Grid>
    </>
  );
}
