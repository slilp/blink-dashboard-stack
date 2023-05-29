import React from "react";
import {
  Typography,
  ListItemButton,
  Stack,
  styled,
  ListItemButtonBaseProps,
  Icon,
  List,
  Divider,
  ListItemText,
  ListItemIcon,
  Box,
  Button,
} from "@mui/material";
import navMenus from "../navMenus";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { grey } from "@mui/material/colors";
import MenuPopover from "views/components/MenuPopover";

type MenuButtonType = ListItemButtonBaseProps & {
  active: boolean;
};

const MenuButtonStyled = styled(ListItemButton)<MenuButtonType>(
  ({ active, theme }) => ({
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

function MiniMenus() {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectMenu, setSelectMenu] = useState<any[]>([]);

  const onOpenPopover = (event: any, menus: any[]) => {
    setAnchorEl(event.currentTarget);
    setSelectMenu(menus);
  };
  return (
    <Stack px="0.5rem">
      {navMenus.map((navMenu, index) => (
        <List sx={{ padding: "0" }}>
          {navMenu.mainMenus.map((menu) => {
            const [open, setOpen] = useState<boolean>(false);
            return (
              <>
                <MenuButtonStyled
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "nowrap",
                  }}
                  active={false}
                  onClick={(e) => onOpenPopover(e, menu.subMenus as any[])}
                >
                  {menu.icon}
                  <Typography variant="body2">{menu.title}</Typography>
                  {menu.subMenus && (
                    <Box>
                      <Icon
                        sx={{
                          fontSize: "1rem",
                          position: "absolute",
                          top: "50%",
                          transform: "translateY(-50%)",
                          right: "2px",
                        }}
                      >
                        <ChevronRightIcon />
                      </Icon>
                    </Box>
                  )}
                </MenuButtonStyled>
              </>
            );
          })}
          {!(index + 1 === navMenus.length) && <Divider />}
        </List>
      ))}
      <MenuPopover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
      >
        {selectMenu?.map((subMenu) => (
          <MenuButtonStyled active={false}>
            <MenuIconStyled> {subMenu.icon}</MenuIconStyled>
            <ListItemText>
              <Typography variant="body2">{subMenu.title}</Typography>
            </ListItemText>
          </MenuButtonStyled>
        ))}
      </MenuPopover>
    </Stack>
  );
}

export default MiniMenus;
