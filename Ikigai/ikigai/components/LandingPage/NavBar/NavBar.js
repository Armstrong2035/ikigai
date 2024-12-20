import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import Link from "next/link";

export default function NavBar() {
  return (
    <div style={{}}>
      <AppBar sx={{ backgroundColor: "inherit" }}>
        <Stack direction="row" justifyContent={"flex-start"} sx={{ ml: 10 }}>
          <Toolbar>
            {/* <Link href="/signup" style={{ textDecoration: "none" }}> */}
            <p
              style={{
                color: "white",
                cursor: "pointer",
                transition: "color 0.3s ease",
              }}
            >
              Ikigai
            </p>
            {/* </Link> */}
          </Toolbar>
          {/* <Toolbar>
            <Link href={"/login"}>
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
            </Link>
          </Toolbar> */}
        </Stack>
      </AppBar>
    </div>
  );
}
