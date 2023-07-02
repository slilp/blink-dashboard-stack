import { ListItemBaseProps, styled, ListItemButton } from "@mui/material";

type MenuButtonType = ListItemBaseProps & {
  active?: string;
};

const MenuButtonStyled = styled(ListItemButton)<MenuButtonType>(
  ({ active, theme }) => ({
    color: theme.palette.text.secondary,
    borderRadius: "8px",
    ...(active === "true" && {
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

export default MenuButtonStyled;
