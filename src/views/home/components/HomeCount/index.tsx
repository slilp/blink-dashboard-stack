import { Box, Card, Grid, Typography } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import { blue, green, orange } from "@mui/material/colors";
import { useTranslation } from "next-i18next";

function HomeCount() {
  const { t } = useTranslation("home");

  const stats = [
    {
      id: "totalProduct",
      label: t("Product"),
      value: 56,
      icon: <CategoryIcon fontSize="large" />,
      color: orange[200],
    },
    {
      id: "totalShop",
      label: t("Shop"),
      value: 5,
      icon: <ShoppingBasketIcon fontSize="large" />,
      color: blue[200],
    },
    {
      id: "totalUSer",
      label: t("Customer"),
      value: 12,
      icon: <PersonIcon fontSize="large" />,
      color: green[200],
    },
  ];

  return (
    <Grid container sx={{ height: "100%" }} spacing={1}>
      {stats.map((stat) => (
        <Grid key={`stat-card-${stat}`} item xs={12} sm={4} md={4}>
          <Card
            sx={{
              height: "100%",
              flex: "1",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box flex="1">
              <Typography
                variant="body1"
                sx={{ mb: "1rem", color: "text.secondary" }}
              >
                {stat.label}
              </Typography>
              <Typography variant="h4">{stat.value}</Typography>
            </Box>
            <Box
              flex="1"
              borderRadius="12px"
              height="50%"
              bgcolor={stat.color}
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight={{ xs: "74px", sm: "60px" }}
            >
              {stat.icon}
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default HomeCount;
