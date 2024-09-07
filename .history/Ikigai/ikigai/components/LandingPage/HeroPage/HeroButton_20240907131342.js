export default function HeroButton() {
  return (
    <>
      <button
        style={{
          backgroundColor: "#F8D57E",
          borderRadius: "15px",
          border: "none",
          padding: "10px 30px",
          cursor: "pointer",
          fontFamily: "Poppins",
          fontWeight: "Regular",
          fontSize: "18px",

          color: "lightgrey",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "white",
          },
        }}
      >
        Get Started
      </button>
    </>
  );
}
