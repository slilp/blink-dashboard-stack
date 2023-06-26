import { Box } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DesktopSidebar from "./DesktopSideBar";
import MobileSideBar from "./MobileSideBar";

function SideBar({
  expandMenu,
  setExpandMenu,
  expandMobileMenu,
  setExpandMobileMenu,
}: any) {
  const { pathname } = useRouter();

  useEffect(() => {
    setExpandMobileMenu(false);
  }, [pathname]);

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
