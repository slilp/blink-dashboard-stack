import {
  Card,
  Typography,
  Box,
  Grid,
  IconButton,
  Tooltip,
} from "@mui/material";
import React from "react";
import { IShopInfo } from "views/shop/pages/ViewShopPage/mockShops";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MapIcon from "@mui/icons-material/Map";
import { useTranslation } from "next-i18next";
import Image from "next/image";

function ShopCard({
  info,
  onOpenPopover,
}: {
  info: IShopInfo;
  onOpenPopover: (e: any, item: IShopInfo) => void;
}) {
  const { t } = useTranslation("shop");

  return (
    <Card>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Tooltip title={t("Action")} placement="left" arrow>
                <IconButton onClick={(e) => onOpenPopover(e, info)}>
                  <MoreHorizIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title={t("Open map")} arrow placement="right">
                <IconButton
                  onClick={() =>
                    window.open(
                      `https://maps.google.com/?q=${info.latitude},${info.longitude}`,
                      "_blank"
                    )
                  }
                >
                  <MapIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box>
              <Typography variant="body1">{info.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {info.address}
              </Typography>
            </Box>
            <Typography variant="body2">
              {t("Tel")} :{" "}
              <Typography
                variant="body2"
                component="a"
                color="text.secondary"
                href={`tel:${info.telLink}`}
              >
                {info.tel}
              </Typography>
            </Typography>
            <Typography variant="body2">
              {t("Open - Close")} :{" "}
              <Typography
                variant="body2"
                component="span"
                color="text.secondary"
              >
                {info.open} - {info.close}
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box position="relative" width="100%" height="100%">
            <Image
              alt={info.id}
              src={info.img}
              fill
              style={{ objectFit: "cover", borderRadius: "12px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ShopCard;
