import React from "react";
import {
  Box,
  Typography,
  ListItemButton,
  ListItemText,
  Stack,
  Collapse,
  styled,
  ListItemButtonBaseProps,
  ListItemIcon,
  Icon,
  List,
} from "@mui/material";
import { navMenus } from "../navMenus";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/router";
import SubMenus from "../SubMenus";

function Menus({ setExpandMobileMenu }: { setExpandMobileMenu?: any }) {
  return (
    <Stack px="1rem">
      {navMenus.map((navMenu, index) => (
        <List key={`navMenu-${index}`} sx={{ padding: "0" }}>
          {navMenu.titleSection && (
            <Typography variant="subtitle2" color="grey.700" px="16px">
              {navMenu.titleSection}
            </Typography>
          )}
          {navMenu.mainMenus.map((menu: any, index: number) => (
            <SubMenus
              key={`submenu-section-${index}`}
              menu={menu}
              index={index}
              setExpandMobileMenu={setExpandMobileMenu}
            />
          ))}
        </List>
      ))}
    </Stack>
  );
}

export default Menus;
