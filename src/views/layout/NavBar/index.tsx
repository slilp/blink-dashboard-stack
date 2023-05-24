import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";

function NavBar() {
  const appBar = {
    position: "fixed",
    color: "inherit",
    elevation: 0,
  };

  const navItems = ["Home", "About", "Contact"];

  return (
    <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          // onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          Menuicon{" "}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
