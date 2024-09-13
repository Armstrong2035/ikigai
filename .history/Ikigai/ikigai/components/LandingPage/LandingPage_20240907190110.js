import HeroPage from "./HeroPage/HeroPage";
import NavBar from "./NavBar/NavBar";
import { Stack, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
      fontSize: "2px",
      lineHeight: "40px",
      color: "black",
    },
  };
  return (
    <div>
      <NavBar styles={styles} />
      <Box>
        <HeroPage styles={styles} />
      </Box>
    </div>
  );
}