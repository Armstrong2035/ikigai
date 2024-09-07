import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import bucketviewDesktop from "../../../images/bucketview-desktop.png";
import homePageMobile from "../../../images/home-page-mobile.png";
import relationshipsMobile from "../../../images/relationships-mobile.png";

export default function HeroImage() {
  return (
    <Grid
      container
      direction="row"
      sx={{ border: "1px solid red", backgroundColor: "#333333" }}
    >
      <Grid item>
        <Stack direction="row">
          <Image
            src={homePageMobile}
            alt="Home Page Mobile"
            style={{ width: 200, height: 200 }}
          />
          <Image
            src={relationshipsMobile}
            alt="Relationships Mobile"
            style={{ width: 200, height: 200 }}
          />
        </Stack>
      </Grid>
      <Grid item>
        <Image /
        src={bucketviewDesktop}
        alt='Bucket View Desktop'
        style={width: '100%'}
        >
      </Grid>
    </Grid>
  );
}
