import React from "react";
import { Drawer, Typography } from "@mui/material";
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
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
    >
      <Typography textAlign="center" variant="h6" sx={{ my: 2 }}>
        LOGO
      </Typography>
      <Menus />
    </Drawer>
  );
}

export default MobileSideBar;
