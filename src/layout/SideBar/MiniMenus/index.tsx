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
} from "@mui/material";
import { navMenus } from "../navMenus";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { grey } from "@mui/material/colors";
import MenuPopover from "components/MenuPopover";
import { useRouter } from "next/router";

type MenuButtonType = ListItemButtonBaseProps & {
  active: boolean;
};

const MenuButtonStyled = styled(ListItemButton)<MenuButtonType>(
  ({ active, theme }) => ({
    color: grey[700],
    borderRadius: "8px",
    ...(active && {
      color: "white",
      backgroundColor: theme.palette.primary.light,
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
      svg: {
        color: "white",
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
  const router = useRouter();

  const onOpenPopover = (event: any, menus: any[]) => {
    setAnchorEl(event.currentTarget);
    setSelectMenu(menus);
  };
  return (
    <Stack px="0.5rem">
      {navMenus.map((navMenu, index) => (
        <List key={`navMenu-${index}`} sx={{ padding: "0" }}>
          {navMenu.mainMenus.map((menu: any) => {
            return (
              <MenuButtonStyled
                key={`mainmenu-${index}`}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "nowrap",
                  my: "0.25rem",
                }}
                active={menu?.subMenus ? false : router.pathname === menu.path}
                onClick={(e) =>
                  menu?.subMenus
                    ? onOpenPopover(e, menu.subMenus as any[])
                    : router.push(menu.path)
                }
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
                        right: "4px",
                      }}
                    >
                      <ChevronRightIcon />
                    </Icon>
                  </Box>
                )}
              </MenuButtonStyled>
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
        {selectMenu?.map((subMenu, index) => (
          <MenuButtonStyled
            key={`submenu-${index}`}
            active={router.pathname === subMenu.path}
            onClick={() => {
              router.push(subMenu.path);
              setAnchorEl(null);
            }}
          >
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
