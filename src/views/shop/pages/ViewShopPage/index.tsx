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
        <Typography variant="h6">
          Shops{" "}
          <Typography variant="body1" color="text.secondary">
            (Only Admin role can see this page)
          </Typography>
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {[
          "https://www.mcmillandoolittle.com/wp-content/uploads/2021/09/Target-Ulta-1.jpg",
          "https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg",
          "https://www.mcmillandoolittle.com/wp-content/uploads/2021/09/Target-Ulta-1.jpg",
          "https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg",
          "https://www.mcmillandoolittle.com/wp-content/uploads/2021/09/Target-Ulta-1.jpg",
        ].map((pic, index) => (
          <Grid key={`shop-card-${index}`} item xs={12} sm={6}>
            <ShopCard pic={pic} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default ViewShopPage;
