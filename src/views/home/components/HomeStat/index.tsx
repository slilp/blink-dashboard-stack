import React from "react";
import { Box, Card, Typography } from "@mui/material";
import dynamic from "next/dynamic";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const graph = {
  options: {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  },
  series: [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ],
};

const donut = {
  options: {},
  series: [44, 55, 41, 17, 15],
  labels: ["A", "B", "C", "D", "E"],
};

function HomeStat() {
  return (
    <Box display="flex" flexDirection="column" sx={{ gap: "12px" }}>
      <Card>
        <Typography variant="h6" mb="1rem">
          Statistics by shop
        </Typography>
        <Box display="flex" justifyContent="center">
          <ApexCharts
            options={graph.options}
            series={graph.series}
            type="bar"
            width="500"
          />
        </Box>
      </Card>
      <Card>
        <Typography variant="h6" mb="1rem">
          Statistics by shop
        </Typography>
        <Box display="flex" justifyContent="center">
          <ApexCharts
            options={donut.options}
            series={donut.series}
            type="donut"
            width="500"
          />
        </Box>
      </Card>
    </Box>
  );
}

export default HomeStat;
