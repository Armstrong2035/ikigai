import { Grid, Stack } from "@mui/material";
import Image from "next/image";
import bucketviewDesktop from "../../../images/bucketview-desktop.png";
import homePageMobile from "../../../images/home-page-mobile.png";
import relationshipsMobile from "../../../images/relationships-mobile.png";

export default function HeroImage() {
  return (
    <Grid container sx={{ backgroundColor: "#333333" }}>
      <Grid item>
        <Stack>
          <Image src={homePageMobile} alt="Home Page Mobile" />
          <Image src={relationshipsMobile} alt="Relationships Mobile" />
        </Stack>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
