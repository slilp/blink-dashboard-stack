import React from "react";
import { Box, Container, Toolbar } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Layout({ children }: any) {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <NavBar />
      <SideBar />
      <Container
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${240}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
