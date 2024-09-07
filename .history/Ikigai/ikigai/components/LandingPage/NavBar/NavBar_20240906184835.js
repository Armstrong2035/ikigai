import { AppBar, Toolbar, Button, Stack } from "@mui/material";

export default function NavBar() {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "inherit" }}>
        <Stack direction="row">
          <Toolbar>
            <Button variant="text" sx={{ backgroundColor: "inherit" }}>
              Signup
            </Button>
          </Toolbar>
          <Toolbar>
            <Button sx={{ backgroundColor: "white" }}>Login</Button>
          </Toolbar>
        </Stack>
      </AppBar>
    </div>
  );
}
