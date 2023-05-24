import React from "react";
import { Box, Container, Toolbar } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Layout({ children }: any) {
  return (
    <Box display="flex">
      <NavBar />
      <Container
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <SideBar />
        <Toolbar />
        {children}
      </Container>
    </Box>
  );
}

export default Layout;
