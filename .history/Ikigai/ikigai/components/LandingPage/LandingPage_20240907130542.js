import HeroPage from "./HeroPage/HeroPage";
import NavBar from "./NavBar/NavBar";
import { Stack, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles";

export default function LandingPage() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const styles = {
    heading: {
      fontFamily: "Poppins",
      fontWeight: "SemiBold",
      fontSize: "60px",
      lineHeight: "90px",
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
    <div style={{ width: "100vw" }}>
      <NavBar styles={styles} />

      <HeroPage styles={styles} />
    </div>
  );
}
