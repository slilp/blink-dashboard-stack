import React, { useMemo, useState } from "react";
import { Box, Container, Toolbar } from "@mui/material";
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
          ml: { sm: `${drawerWidth}px` },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
          <Toolbar />
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
