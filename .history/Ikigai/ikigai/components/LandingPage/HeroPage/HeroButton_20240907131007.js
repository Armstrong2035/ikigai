export default function HeroButton() {
  return (
    <>
      <button
        style={{
          backgroundColor: "#BFAFF2",
          borderRadius: "15px",
          border: "none",
          padding: "10px 30px",
          cursor: "pointer",
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