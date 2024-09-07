import { AppBar, Toolbar, Button, Stack } from "@mui/material";

export default function NavBar() {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "inherit" }}>
        <Stack direction="row" justifyContent={"flex-end"}>
          <Toolbar>
            <Button variant="text" sx={{}}>
              Signup
            </Button>
          </Toolbar>
          <Toolbar>
            <Button
              sx={{
                backgroundColor: "white",
                borderRadius: "5px",
                padding: "auto, 5px",
              }}
            >
              Login
            </Button>
          </Toolbar>
        </Stack>
      </AppBar>
    </div>
  );
}
