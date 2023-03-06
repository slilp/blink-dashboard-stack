import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Typography,
  Button,
} from "@mui/material";

function NavBar() {
  const appBar = {
    position: "fixed",
    color: "inherit",
    elevation: 0,
  };

  const navItems = ["Home", "About", "Contact"];

  return (
    <AppBar
      component="nav"
      color="inherit"
      elevation={0}
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${240}px)` },
        ml: { sm: `${240}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          //   onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          {/* <MenuIcon /> */}
        </IconButton>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
