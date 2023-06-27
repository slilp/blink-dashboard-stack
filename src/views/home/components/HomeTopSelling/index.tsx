import React from "react";
import {
  Box,
  Card,
  IconButton,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import Image from "next/image";
import MovingIcon from "@mui/icons-material/Moving";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTranslation } from "next-i18next";

const topSell = [
  {
    id: "iphone",
    name: "Iphone 14 Pro",
    img: "/products/iphone-14-pro.jpeg",
    amount: 70.5,
    value: "12",
  },
  {
    id: "macbook-midnight",
    name: "Macbook Air Midnight",
    img: "/products/macbook-air-midnight.jpeg",
    amount: 42,
    value: "9",
  },
  {
    id: "macbook-space",
    name: "Macbook Air Space grey",
    img: "/products/macbook-air-space-grey.jpeg",
    amount: 35,
    value: "5",
  },
];

function HomeTopSelling() {
  const { t } = useTranslation("home");

  return (
    <Card>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" mb="1rem">
          {t("Best Selling Products")} 🏆
        </Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Divider sx={{ mt: 1, mb: 2, borderStyle: "dashed" }} />
      <Grid container spacing={1}>
        {topSell.map((item) => (
          <React.Fragment key={`top-selling-card-${item.id}`}>
            <Grid item xs={4}>
              <Image
                style={{
                  borderRadius: "12px",
                  objectFit: "contain",
                  flex: "1",
                }}
                alt={item.name}
                src={item.img}
                height="70"
                width="70"
              />
            </Grid>
            <Grid item xs={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                height="100%"
              >
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  {item.amount} {t("MB")}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                height="100%"
                color="success.main"
              >
                <MovingIcon />
                <Typography variant="body2">{item.value}%</Typography>
              </Box>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Card>
  );
}

export default HomeTopSelling;
