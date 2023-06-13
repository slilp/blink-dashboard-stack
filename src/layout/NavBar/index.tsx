import React, { useState } from "react";
import {
  AppBar,
  List,
  ListItem,
  Box,
  Container,
  IconButton,
  Toolbar,
  Divider,
  ListItemText,
  ListItemButton,
  styled,
  Typography,
  ListItemIcon,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuPopover from "components/MenuPopover";
import { InboxOutlined, LogoutOutlined } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import { grey } from "@mui/material/colors";

const MenuButtonStyled = styled(ListItemButton)(({ theme }) => ({
  color: grey[700],
  borderRadius: "8px",
}));

function NavBar({ drawerWidth, setExpandMobileMenu }: any) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { data: session } = useSession();
  const onOpenPopover = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

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
          width: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth}px)`,
          },
          ml: { xs: "0px", md: `${drawerWidth}px` },
        }}
      >
        <IconButton
          sx={{
            display: { xs: "block", md: "none" },
          }}
          onClick={() => setExpandMobileMenu(true)}
        >
          <MenuOpenIcon />
        </IconButton>
        <Container maxWidth="xl">
          <Box display="flex" justifyContent="flex-end" width="100%">
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={onOpenPopover}
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Container>
      </Toolbar>
      <MenuPopover
        sx={{ width: "250px" }}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem>
                <Typography variant="body2" noWrap>
                  {session?.user?.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" noWrap color="grey.700">
                  {session?.user?.email}
                </Typography>
              </ListItem>
            </List>
          </nav>
          <Divider sx={{ borderStyle: "dashed" }} />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <MenuButtonStyled
                  onClick={() => signOut({ callbackUrl: "/login" })}
                >
                  <ListItemIcon sx={{ fontSize: "1.5rem" }}>
                    <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">Logout</Typography>
                  </ListItemText>
                </MenuButtonStyled>
              </ListItem>
            </List>
          </nav>
        </Box>
      </MenuPopover>
    </AppBar>
  );
}

export default NavBar;
