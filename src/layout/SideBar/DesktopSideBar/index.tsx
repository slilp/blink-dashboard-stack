import React from "react";
import { Drawer, Typography, Box, IconButton } from "@mui/material";
import Menus from "../Menus";
import MiniMenus from "../MiniMenus";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

function DesktopSidebar({ expandMenu, setExpandMenu }: any) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: expandMenu ? 240 : 100,
          transition: "width 0.25s",
        },
      }}
      PaperProps={{
        sx: {
          borderLeft: "0",
          borderTop: "0",
          borderBottom: "0",
          borderStyle: "dashed",
        },
      }}
      open={true}
    >
      <Box textAlign="center" my={2}>
        <Typography variant="h5" fontWeight="bold">
          Blink
        </Typography>
      </Box>

      <Box textAlign="right">
        {!expandMenu && (
          <IconButton onClick={() => setExpandMenu(true)}>
            <ArrowCircleRightIcon sx={{ opacity: 0.8 }} />
          </IconButton>
        )}
        {expandMenu && (
          <IconButton onClick={() => setExpandMenu(false)}>
            <ArrowCircleLeftIcon sx={{ opacity: 0.8 }} />
          </IconButton>
        )}
      </Box>
      {expandMenu ? <Menus /> : <MiniMenus />}
    </Drawer>
  );
}

export default DesktopSidebar;
