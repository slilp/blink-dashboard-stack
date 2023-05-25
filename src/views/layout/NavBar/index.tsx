import React from "react";
import {
  AppBar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";

function NavBar({ drawerWidth, setExpandMobileMenu }: any) {
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
      <Toolbar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <IconButton
          sx={{
            display: { xs: "block", sm: "none" },
          }}
          onClick={() => setExpandMobileMenu(true)}
        >
          <MenuOpenIcon />
        </IconButton>
        <Container maxWidth="xl">
          <Box display="flex" justifyContent="flex-end" width="100%">
            <IconButton size="large" aria-label="show 4 new mails">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton size="large" aria-label="show 17 new notifications">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
