import {
  Box,
  Drawer,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DesktopSidebar from "./DesktopSideBar";
import MobileSideBar from "./MobileSideBar";

function SideBar({
  expandMenu,
  setExpandMenu,
  expandMobileMenu,
  setExpandMobileMenu,
}: any) {
  return (
    <Box component="nav">
      <MobileSideBar
        expandMobileMenu={expandMobileMenu}
        setExpandMobileMenu={setExpandMobileMenu}
      />
      <DesktopSidebar expandMenu={expandMenu} setExpandMenu={setExpandMenu} />
    </Box>
  );
}

export default SideBar;
