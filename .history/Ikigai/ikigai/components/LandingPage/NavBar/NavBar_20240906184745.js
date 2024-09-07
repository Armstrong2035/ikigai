import { AppBar, Toolbar, Button, Stack } from "@mui/material";

export default function NavBar() {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "inherit" }}>
        <Stack direction="row">
          <Toolbar>
            <Button sx={{ backgroundColor: "inherit" }}>Signup</Button>
          </Toolbar>
        </Stack>
      </AppBar>
    </div>
  );
}
