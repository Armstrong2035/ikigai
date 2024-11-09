import HeroPage from "./HeroPage/HeroPage";
import NavBar from "./NavBar/NavBar";
import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SlideShow from "./SlideShow/SlideShow";
import Images from "./HeroPage/Images";

export default function LandingPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const styles = {
    heading: {
      fontFamily: "Poppins",
      fontWeight: "SemiBold",
      fontSize: isDesktop ? "60px" : "40px",
      lineHeight: isDesktop ? "90px" : "60px",
      color: "white",
    },
    bodyBold: {
      fontFamily: "Poppins",
      fontWeight: "SemiBold",
      fontSize: "18px",
      lineHeight: "32px",
      color: "white",
    },
    body: {
      fontFamily: "Poppins",
      fontWeight: "Regular",
      fontSize: "18px",
      lineHeight: "32px",
      color: "lightgrey",
    },
    secondarySemiBold: {
      fontFamily: "Poppins",
      fontWeight: "SemiBold",
      fontSize: "20px",
      lineHeight: "40px",
      color: "black",
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0d0d0d",
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
        //backgroundSize: "40px 40px",
        color: "white",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          background: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0))`, // Fades from black to transparent
          pt: 15,
          pb: 3,
          width: "100%",
          height: "50%",
          zIndex: 2,
          // border: "1px solid blue",
        }}
      >
        <HeroPage styles={styles} />
      </Box>

      {/* <Images /> */}

      <Container>
        <SlideShow />
      </Container>
    </Box>
  );
}
