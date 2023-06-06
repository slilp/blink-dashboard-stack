import React from "react";
import { AppBar, Box, Container, Toolbar } from "@mui/material";
import Image from "next/image";

function UnauthenNavbar() {
  return (
    <AppBar
      sx={{
        boxShadow: "none",
        backgroundImage: "none",
        position: "fixed",
        top: "0",
        left: "auto",
        right: "0",
        zIndex: "1000",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      }}
    >
      <Toolbar>
        <Container maxWidth="xl">
          <Box display="flex" width="100%">
            <Image alt="logo" src="/vercel.svg" height={60} width={100} />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default UnauthenNavbar;
