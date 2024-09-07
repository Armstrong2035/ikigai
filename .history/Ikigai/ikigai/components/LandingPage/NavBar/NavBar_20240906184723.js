import { AppBar, Toolbar, Button, Stack } from "@mui/material";

export default function NavBar() {
  return (
    <div>
      <p>App bar??</p>
      <AppBar sx={{ backgroundColor: "inherit" }}>
        <Stack direction="row">
          <Toolbar key={index}>
            <Button sx={{ backgroundColor: "inherit" }}>Signup</Button>
          </Toolbar>
        </Stack>
      </AppBar>
    </div>
  );
}
