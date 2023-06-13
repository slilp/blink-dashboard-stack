import React, { useMemo, useState } from "react";
import { Box, Breadcrumbs, Container, Stack, Toolbar } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

function Layout({ children }: any) {
  const [expandMenu, setExpandMenu] = useState<boolean>(true);
  const [expandMobileMenu, setExpandMobileMenu] = useState<boolean>(false);
  const drawerWidth = useMemo(() => (expandMenu ? 240 : 100), [expandMenu]);

  return (
    <Box display="flex">
      <NavBar
        drawerWidth={drawerWidth}
        setExpandMobileMenu={setExpandMobileMenu}
      />

      <SideBar
        expandMenu={expandMenu}
        setExpandMenu={setExpandMenu}
        expandMobileMenu={expandMobileMenu}
        setExpandMobileMenu={setExpandMobileMenu}
      />
      <Box
        sx={{
          width: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth}px)`,
          },
          ml: { xs: "0px", md: `${drawerWidth}px` },
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Toolbar />
          {/* <Stack spacing={2} color="red">
            <Breadcrumbs separator="›">Home</Breadcrumbs>
            <Breadcrumbs separator="›">Product</Breadcrumbs>
            <Breadcrumbs separator="›">Shop</Breadcrumbs>
          </Stack> */}
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
