import { AppBar, Toolbar } from "@mui/material";

export default function NavBar() {
  const menuItems = ["Sign up", "Log in", "Pricing"];

  return (
    <div>
      <AppBar>
        {menuItems.map((item) => (
          <Toolbar>
            <Button>{item}</Button>
          </Toolbar>
        ))}
      </AppBar>
    </div>
  );
}
