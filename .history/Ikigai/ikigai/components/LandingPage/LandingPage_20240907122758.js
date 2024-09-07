import HeroPage from "./HeroPage/HeroPage";
import NavBar from "./NavBar/NavBar";

export default function LandingPage() {
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
    <>
      <NavBar styles={styles} />
      <HeroPage styles={styles} />
    </>
  );
}
