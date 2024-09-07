import NavBar from "./NavBar/NavBar";

export default function LandingPage() {
  const styles = {
    heading: {
      fontFamily: "Poppins",
      fontWeight: "SemiBold",
      fontSize: "60px",
      lineHeight: "90px",
    },
    bodyBold: {
      fontFamily: "Poppins",
      fontWeight: "SemiBold",
      fontSize: "18px",
      lineHeight: "32px",
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
    },
  };
  return (
    <>
      <NavBar />
    </>
  );
}
