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
import useActiveUrl from "../useActiveUrl";

type MenuButtonType = ListItemButtonBaseProps & {
  active: boolean;
};

const MenuButtonStyled = styled(ListItemButton)<MenuButtonType>(
  ({ active, theme }) => ({
    marginTop: theme.spacing(0.65),
    marginBottom: theme.spacing(0.65),
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

function SubMenus({ menu, index }: any) {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <MenuButtonStyled
        key={`mainmenu-${index}`}
        active={menu?.subMenus ? false : router.pathname === menu.path}
        onClick={() =>
          menu?.subMenus ? setOpen(!open) : router.push(menu.path)
        }
      >
        <MenuIconStyled> {menu.icon}</MenuIconStyled>
        <ListItemText>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2">{menu.title}</Typography>
            {menu?.subMenus && (
              <Icon>{open ? <ExpandMoreIcon /> : <ChevronRightIcon />}</Icon>
            )}
          </Box>
        </ListItemText>
      </MenuButtonStyled>
      {menu?.subMenus && (
        <Collapse in={open} unmountOnExit timeout={200}>
          {menu?.subMenus?.map((subMenu: any, index: number) => (
            <MenuButtonStyled
              key={`submenu-${index}`}
              active={router.pathname === subMenu.path}
              onClick={() => router.push(subMenu.path)}
            >
              <MenuIconStyled> {subMenu.icon}</MenuIconStyled>
              <ListItemText>
                <Typography variant="body2">{subMenu.title}</Typography>
              </ListItemText>
            </MenuButtonStyled>
          ))}
        </Collapse>
      )}
    </>
  );
}

export default SubMenus;
