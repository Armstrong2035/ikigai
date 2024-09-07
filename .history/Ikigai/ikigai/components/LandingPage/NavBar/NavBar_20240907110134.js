import { AppBar, Toolbar, Button, Stack } from "@mui/material";

export default function NavBar() {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "inherit" }}>
        <Stack direction="row" justifyContent={"flex-end"} sx={{ mr: 2 }}>
          <Toolbar>
            <Button variant="text">Signup</Button>
          </Toolbar>
          <Toolbar>
            <Button
              sx={{
                backgroundColor: "white",
                borderRadius: "15px",
                minWidth: "30px",
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
