import { Box, Typography, Card, Divider, Tabs, Tab, Grid } from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import ShopCard from "views/shop/components/ShopCard";

function ViewShopPage() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [page, setPage] = useState(0);

  const handleFilterStatus = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setPage(0);
    setFilterStatus(newValue);
  };

  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Shop" />
      </Head>
      <Box display="flex" justifyContent="space-between" mb="2rem">
        <Typography variant="h6">Shops</Typography>
      </Box>

      <Tabs value={filterStatus} onChange={handleFilterStatus}>
        <Tab value="all" label="All" />
        <Tab value="selling" label="Selling" />
        <Tab value="waiting" label="Waiting" />
        <Tab value="stop" label="Stop" />
      </Tabs>
      <Grid container spacing={2}>
        {[
          "https://www.mcmillandoolittle.com/wp-content/uploads/2021/09/Target-Ulta-1.jpg",
          "https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg",
        ].map((pic) => (
          <Grid item xs={12} sm={6}>
            <ShopCard pic={pic} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ViewShopPage;
