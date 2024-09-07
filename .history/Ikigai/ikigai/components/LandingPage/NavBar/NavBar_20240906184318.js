import { AppBar, Toolbar } from "@mui/material";

export default function NavBar() {
  const menuItems = ["Sign up", "Log in", "Pricing"];

  return (
    <div>
      <AppBar sx={{ border: "1px solid red" }}>
        {menuItems.map((item) => (
          <Toolbar>
            <Button sx={{ backgroundColor: "white" }}>{item}</Button>
          </Toolbar>
        ))}
      </AppBar>
    </div>
  );
}
