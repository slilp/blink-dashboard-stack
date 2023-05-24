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
import navMenus from "../navMenus";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { grey } from "@mui/material/colors";

type MenuButtonType = ListItemButtonBaseProps & {
  active: boolean;
};

const MenuButtonStyled = styled(ListItemButton)<MenuButtonType>(
  ({ active, theme }) => ({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: grey[700],
    borderRadius: "8px",
    ...(active && {
      backgroundColor: theme.palette.primary.light,
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    }),
  })
);

const MenuIconStyled = styled(ListItemIcon)({
  fontSize: "1.5rem",
});

function Menus() {
  return (
    <Stack px="1rem">
      {navMenus.map((navMenu) => (
        <List sx={{ padding: "0" }}>
          {navMenu.titleSection && (
            <Typography variant="subtitle2" color="grey.700" px="16px">
              {navMenu.titleSection}
            </Typography>
          )}
          {navMenu.mainMenus.map((menu) => {
            const [open, setOpen] = useState<boolean>(false);
            return (
              <>
                <MenuButtonStyled active={false} onClick={() => setOpen(!open)}>
                  <MenuIconStyled> {menu.icon}</MenuIconStyled>
                  <ListItemText>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="body2">{menu.title}</Typography>
                      {menu.subMenus && (
                        <Icon>
                          {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                        </Icon>
                      )}
                    </Box>
                  </ListItemText>
                </MenuButtonStyled>
                {menu.subMenus && (
                  <Collapse in={open} unmountOnExit>
                    {menu.subMenus?.map((subMenu) => (
                      <MenuButtonStyled active={false}>
                        <MenuIconStyled> {subMenu.icon}</MenuIconStyled>
                        <ListItemText>
                          <Typography variant="body2">
                            {subMenu.title}
                          </Typography>
                        </ListItemText>
                      </MenuButtonStyled>
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
}

export default Menus;
