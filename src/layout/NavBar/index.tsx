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
  Button,
  Tooltip,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuPopover from "components/MenuPopover";
import { LogoutOutlined } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import { grey } from "@mui/material/colors";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { changeTheme, themeModeSelector } from "redux/darkMode";
import { useAppDispatch, useAppSelector } from "redux/hook";
import { useRouter } from "next/router";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "next-i18next";

const MenuButtonStyled = styled(ListItemButton)(({ theme }) => ({
  color: grey[700],
  borderRadius: "8px",
}));

function NavBar({ drawerWidth, setExpandMobileMenu }: any) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchorElLang, setAnchorElLang] = useState<HTMLButtonElement | null>(
    null
  );
  const { data: session } = useSession();
  const onOpenPopover = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const onOpenPopoverLang = (event: any) => {
    setAnchorElLang(event.currentTarget);
  };
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
  const { locale, push, asPath } = useRouter();
  const { t } = useTranslation("common");

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
          <Box
            display="flex"
            justifyContent="flex-end"
            width="100%"
            sx={{ gap: "8px" }}
          >
            <Box display="flex" justifyContent="space-between" my={1}>
              {darkMode.theme === "light" ? (
                <Tooltip title={t("Dark theme")} arrow>
                  <IconButton onClick={() => dispatch(changeTheme(true))}>
                    <Brightness7Icon />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title={t("Light theme")} arrow>
                  <IconButton onClick={() => dispatch(changeTheme(false))}>
                    <Brightness4Icon />
                  </IconButton>
                </Tooltip>
              )}

              <Tooltip title={t("Language")} arrow>
                <IconButton onClick={onOpenPopoverLang}>
                  <TranslateIcon />
                </IconButton>
              </Tooltip>

              <Button
                onClick={onOpenPopover}
                sx={{ color: "grey.600", width: "150px" }}
                startIcon={<AccountCircle />}
                endIcon={
                  anchorEl === null ? <ChevronRightIcon /> : <ExpandMoreIcon />
                }
              >
                <Typography variant="body2" noWrap>
                  {session?.user?.name}
                </Typography>{" "}
              </Button>
            </Box>
          </Box>
        </Container>
      </Toolbar>

      <MenuPopover
        sx={{ width: "250px" }}
        open={Boolean(anchorElLang)}
        anchorEl={anchorElLang}
        onClose={() => setAnchorElLang(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List>
          <ListItem disablePadding>
            <MenuButtonStyled
              sx={{
                backgroundColor: locale === "en" ? "action.hover" : "default",
              }}
              onClick={() => push(asPath, asPath, { locale: "en" })}
            >
              <ListItemText>
                <Typography variant="h5">🇹🇭</Typography>
                EN
              </ListItemText>
            </MenuButtonStyled>
            <MenuButtonStyled
              sx={{
                backgroundColor: locale === "th" ? "action.hover" : "default",
              }}
              onClick={() => push(asPath, asPath, { locale: "th" })}
            >
              <ListItemText>
                <Typography variant="h5">🇬🇧</Typography>
                TH
              </ListItemText>
            </MenuButtonStyled>
          </ListItem>
        </List>
      </MenuPopover>

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
        <Box sx={{ width: "100%", maxWidth: 360 }}>
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
              <ListItem disablePadding>
                <MenuButtonStyled>
                  <ListItemIcon sx={{ fontSize: "1.5rem" }}>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">{t("Settings")} </Typography>
                  </ListItemText>
                </MenuButtonStyled>
              </ListItem>
            </List>
          </nav>
          <Divider sx={{ borderStyle: "dashed" }} />
          <nav>
            <List>
              <ListItem disablePadding>
                <MenuButtonStyled
                  onClick={() =>
                    signOut({
                      callbackUrl:
                        locale === "en" ? "/login" : `/${locale}/login`,
                    })
                  }
                >
                  <ListItemIcon sx={{ fontSize: "1.5rem" }}>
                    <LogoutOutlined />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="body2">{t("Logout")}</Typography>
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
