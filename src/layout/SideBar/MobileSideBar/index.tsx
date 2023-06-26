import React from "react";
import { Drawer, Typography, Box } from "@mui/material";
import { useRouter } from "next/router";
import Menus from "../Menus";

function MobileSideBar({ expandMobileMenu, setExpandMobileMenu }: any) {
  const navItems = ["Home", "About", "Contact"];
  const router = useRouter();

  return (
    <Drawer
      variant="temporary"
      open={expandMobileMenu}
      onClose={() => setExpandMobileMenu(false)}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
    >
      <Box textAlign="center" my={2}>
        <Typography variant="h5" fontWeight="bold">
          Blink
        </Typography>
      </Box>

      <Menus />
    </Drawer>
  );
}

export default MobileSideBar;
