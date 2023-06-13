import { Button } from "@mui/material";
import Head from "next/head";
import React from "react";

function CreateProductPage() {
  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product" />
      </Head>
      <Button variant="contained">Create new product</Button>
    </>
  );
}

export default CreateProductPage;
