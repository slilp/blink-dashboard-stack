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
        display: { xs: "none", sm: "block" },
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
      open
    >
      <Box display="flex" justifyContent="center">
        <Typography variant="h6" sx={{ my: 2 }}>
          LOGO
        </Typography>
      </Box>

      <Box textAlign="center">
        {!expandMenu && (
          <IconButton onClick={() => setExpandMenu(true)}>
            <ArrowCircleRightIcon />
          </IconButton>
        )}
        {expandMenu && (
          <IconButton onClick={() => setExpandMenu(false)}>
            <ArrowCircleLeftIcon />
          </IconButton>
        )}
      </Box>
      {expandMenu ? <Menus /> : <MiniMenus />}
    </Drawer>
  );
}

export default DesktopSidebar;