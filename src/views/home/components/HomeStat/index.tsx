import React from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTranslation } from "next-i18next";

const donut = {
  options: { labels: ["Apple", "Samsung", "Xiaomi", "Other"] },
  series: [32, 24, 15, 29],
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function HomeStat() {
  const { t } = useTranslation("home");

  return (
    <Card sx={{ height: "100%" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" mb="1rem">
          📈 {t("Statistics")}
        </Typography>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mt: 1, mb: 2, borderStyle: "dashed" }} />
      <Grid container spacing={1}>
        <Grid item xs={12} sm={4}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            sx={{ gap: "8px" }}
          >
            <Typography variant="body1">{t("Weekly Sale Target")} </Typography>
            <BorderLinearProgress variant="determinate" value={80} />
            <Typography variant="body1">{t("Monthly Sale Target")} </Typography>
            <BorderLinearProgress variant="determinate" value={50} />
            <Typography variant="body1">{t("Yearly Sale Target")} </Typography>
            <BorderLinearProgress variant="determinate" value={30} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", md: "block" } }}
            />

            <ApexCharts
              options={donut.options}
              series={donut.series}
              type="donut"
              width={350}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default HomeStat;
