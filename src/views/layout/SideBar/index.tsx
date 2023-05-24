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

function SideBar() {
  return (
    <Box component="nav">
      <MobileSideBar />
      <DesktopSidebar />
    </Box>
  );
}

export default SideBar;
