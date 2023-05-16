import React from "react";
import {
  Box,
  Drawer,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Collapse,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import navMenus from "../navMenus";
import { useState } from "react";

function DesktopSidebar() {
  const navItems = ["Home", "About", "Contact"];
  const router = useRouter();
  const drawer = (
    <Stack p="1rem">
      {navMenus.map((navMenu) => (
        <List>
          {navMenu.titleSection && (
            <Typography>{navMenu.titleSection}</Typography>
          )}
          {navMenu.mainMenus.map((menu) => {
            const [open, setOpen] = useState<boolean>(false);
            const handleOpen = () => setOpen(true);
            const handleClose = () => setOpen(false);

            return (
              <>
                <ListItemButton>
                  {menu.icon}
                  <ListItemText>
                    <Box display="flex">
                      {menu.title}
                      {menu.subMenus && (
                        <Box>
                          <Button onClick={() => setOpen(!open)}>
                            Open/Close
                          </Button>
                        </Box>
                      )}
                    </Box>
                  </ListItemText>
                </ListItemButton>
                {menu.subMenus && (
                  <Collapse in={open} unmountOnExit>
                    {menu.subMenus?.map((subMenu) => (
                      <ListItemButton>
                        {subMenu.icon}
                        <ListItemText>
                          <Box display="flex">{subMenu.title}</Box>
                        </ListItemText>
                      </ListItemButton>
                    ))}
                  </Collapse>
                )}
              </>
            );
          })}
        </List>
      ))}
    </Stack>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
      }}
      open
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        {drawer}
      </Box>
    </Drawer>
  );
}

export default DesktopSidebar;
