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
} from "@mui/material";
import navMenus from "../navMenus";
import { useState } from "react";
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

function MiniMenus() {
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
                  onClick={() => setOpen(!open)}
                >
                  {menu.icon}
                  <Typography variant="body2">{menu.title}</Typography>
                  {menu.subMenus && (
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
                  )}
                </MenuButtonStyled>
                {/* {menu.subMenus && (
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
                )} */}
              </>
            );
          })}
          {!(index + 1 === navMenus.length) && <Divider />}
        </List>
      ))}
    </Stack>
  );
}

export default MiniMenus;
