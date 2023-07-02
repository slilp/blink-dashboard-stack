import {
  Box,
  Typography,
  ListItemIcon,
  ListItemText,
  ListItem,
  Grid,
  List,
} from "@mui/material";
import MenuPopover from "components/MenuPopover";
import Head from "next/head";
import React, { useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MenuButtonStyled from "components/MenuButtonStyled";
import ShopCard from "views/shop/components/ShopCard";
import { useTranslation } from "next-i18next";
import { IShopInfo, mockShops } from "./mockShops";

function ViewShopPage() {
  const { t } = useTranslation("shop");
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [selectedCode, setSelectedCode] = useState("");

  const onOpenPopover = (event: any, item: IShopInfo) => {
    setAnchorEl(event.currentTarget);
    setSelectedCode(item.id);
  };

  return (
    <>
      <Head>
        <title>{t("Shop")}</title>
      </Head>
      <Box display="flex" justifyContent="space-between" mb="2rem">
        <Typography variant="h6">
          {t("Shop")}{" "}
          <Typography variant="body1" color="text.secondary">
            ({t("Only Admin role can see this page")})
          </Typography>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {mockShops.map((shop) => (
          <Grid key={`shop-card-${shop.id}`} item xs={12} sm={6}>
            <ShopCard info={shop} onOpenPopover={onOpenPopover} />
          </Grid>
        ))}
      </Grid>
      <MenuPopover
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
        <List sx={{ color: "text.secondary" }}>
          {[
            {
              key: "popover-view-btn",
              label: t("View"),
              icon: <RemoveRedEyeIcon fontSize="small" />,
              color: "text.secondary",
            },
            {
              key: "popover-edit-btn",
              label: t("Edit"),
              icon: <ModeEditIcon fontSize="small" />,
              color: "text.secondary",
            },
            {
              key: "popover-del-btn",
              label: t("Delete"),
              icon: <DeleteForeverIcon fontSize="small" />,
              color: "error.main",
            },
          ].map((pop) => (
            <ListItem key={pop.key} disablePadding>
              <MenuButtonStyled>
                <ListItemIcon sx={{ color: pop.color }}>
                  {pop.icon}
                </ListItemIcon>
                <ListItemText sx={{ color: pop.color }}>
                  {pop.label}
                </ListItemText>
              </MenuButtonStyled>
            </ListItem>
          ))}
        </List>
      </MenuPopover>
    </>
  );
}

export default ViewShopPage;
