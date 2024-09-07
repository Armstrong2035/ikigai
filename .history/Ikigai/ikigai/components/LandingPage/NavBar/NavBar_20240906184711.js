import { AppBar, Toolbar, Button, Stack } from "@mui/material";

export default function NavBar() {
  const menuItems = ["Sign up", "Log in", "Pricing"];

  return (
    <div>
      <p>App bar??</p>
      <AppBar sx={{ backgroundColor: "inherit" }}>
        <Stack direction="row">
          <Toolbar key={index}>
            <Button sx={{ backgroundColor: "inherit" }}>{item}</Button>
          </Toolbar>
        </Stack>
      </AppBar>
    </div>
  );
}
