import { AppBar, Toolbar, Button, Stack } from "@mui/material";

export default function NavBar() {
  return (
    <div style={{ marginBottom: "100px" }}>
      <AppBar sx={{ backgroundColor: "inherit" }}>
        <Stack direction="row" justifyContent={"flex-end"} sx={{ mr: 2 }}>
          <Toolbar>
            <a href="/signup" style={{ textDecoration: "none" }}>
              <p
                style={{
                  color: "white",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
                }}
              >
                Signup
              </p>
            </a>
          </Toolbar>
          <Toolbar>
            <button
              style={{
                backgroundColor: "#BFAFF2",
                borderRadius: "15px",
                border: "none",
                padding: "10px 30px",
                fontFamily: "Poppins",
                fontWeight: "Regular",
                fontSize: "18px",
                color: "#333333",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
            >
              Login
            </button>
          </Toolbar>
        </Stack>
      </AppBar>
    </div>
  );
}
