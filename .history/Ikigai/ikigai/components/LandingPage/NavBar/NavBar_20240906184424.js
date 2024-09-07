import { AppBar, Toolbar, Button } from "@mui/material";

export default function NavBar() {
  const menuItems = ["Sign up", "Log in", "Pricing"];

  return (
    <div>
      <p>App bar??</p>
      <AppBar sx={{ border: "1px solid red" }}>
        {menuItems.map((item, index) => (
          <Toolbar key={index}>
            <Button sx={{ backgroundColor: "white" }}>{item}</Button>
          </Toolbar>
        ))}
      </AppBar>
    </div>
  );
}
