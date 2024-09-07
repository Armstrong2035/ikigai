import { AppBar, Toolbar, Button, Stack } from "@mui/material";

export default function NavBar() {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "inherit" }}>
        <Stack direction="row" justifyContent={"flex-end"} sx={{ mr: 2 }}>
          <Toolbar>
            <p>Signup</p>
          </Toolbar>
          <Toolbar>
            <button
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                padding: "10px 30px",
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
