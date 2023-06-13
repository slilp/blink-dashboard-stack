import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MoreVertRounded } from "@mui/icons-material";
import Table, { ColumnTable } from "components/Table";

interface IProduct {
  code: string;
  name: string;
  desc: string;
  img: string;
  brand: string;
}

const datas: IProduct[] = [
  {
    code: "P0001",
    name: "Macbook air",
    desc: "Macbook air",
    brand: "apple",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306",
  },
  {
    code: "P0002",
    name: "Macbook air",
    desc: "Macbook air",
    brand: "apple",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306",
  },
  {
    code: "P0003",
    name: "Macbook air",
    desc: "Macbook air",
    brand: "apple",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306",
  },
  {
    code: "P0004",
    name: "Macbook air",
    desc: "Macbook air",
    brand: "apple",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306",
  },
  {
    code: "P0005",
    name: "Macbook air",
    desc: "Macbook air",
    brand: "apple",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306",
  },
  {
    code: "P0006",
    name: "Macbook air",
    desc: "Macbook air",
    brand: "apple",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306",
  },
  {
    code: "P0007",
    name: "Macbook air",
    desc: "Macbook air",
    brand: "apple",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306",
  },
  {
    code: "P0008",
    name: "Macbook air",
    desc: "Macbook air",
    brand: "apple",
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mba15-midnight-select-202306",
  },
];

const columns: ColumnTable<IProduct>[] = [
  {
    title: "",
    dataIndex: "img",
    key: "imgProduct",
    render: (val: IProduct) => (
      <Box component="img" src={val.img} height="50px" width="50px" />
    ),
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
    render: (val: IProduct) => <Box bgcolor="red">{val.brand}</Box>,
  },
  {
    title: "Action",
    dataIndex: null,
    key: "action",
    render: (val: IProduct) => (
      <IconButton>
        <MoreVertRounded />
      </IconButton>
    ),
  },
  {
    title: "",
    dataIndex: "img",
    key: "imgProduct",
    render: (val: IProduct) => (
      <Box component="img" src={val.img} height="50px" width="50px" />
    ),
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
    render: (val: IProduct) => <Box bgcolor="red">{val.brand}</Box>,
  },
  {
    title: "Action",
    dataIndex: null,
    key: "action",
    render: (val: IProduct) => (
      <IconButton>
        <MoreVertRounded />
      </IconButton>
    ),
  },
];

function ProductViewPage() {
  const [page, setPage] = useState(0);
  const [filterStatus, setFilterStatus] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<"asc" | "desc">();

  const onChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPage(0);
      setRowsPerPage(parseInt(event.target.value, 10));
    },
    []
  );

  const onChangePage = useCallback(
    (_: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    },
    []
  );

  const onSortCode = (id: string | number) => {
    if (id !== "") setOrder(order === "asc" ? "desc" : "asc");
  };

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
        <title>Product</title>
        <meta name="description" content="Product" />
      </Head>
      <Box display="flex" justifyContent="space-between" mb="2rem">
        <Typography variant="h6">Products</Typography>
        <Button variant="contained" startIcon={<AddCircleOutlineIcon />}>
          Create new product
        </Button>
      </Box>
      <Card sx={{ padding: "0" }}>
        <Box p={2}>
          <Typography variant="body1">Total record 50</Typography>
        </Box>
        <Divider />

        <Tabs value={filterStatus} onChange={handleFilterStatus}>
          <Tab value="all" label="All" />
          <Tab value="selling" label="Selling" />
          <Tab value="waiting" label="Waiting" />
          <Tab value="stop" label="Stop" />
        </Tabs>

        <Divider />
        <Table<IProduct>
          columns={columns}
          page={page}
          totalRecord={datas.length}
          isLoading={false}
          dataSource={datas.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )}
          notFoundText="ไม่เจอนะ"
          onChangeRowPerPage={onChangeRowsPerPage}
          onChangePage={onChangePage}
          rowsPerPageOptions={[5, 10, 15]}
          rowsPerPage={rowsPerPage}
          order={order}
          orderBy="code"
          onSort={onSortCode}
        />
      </Card>
    </>
  );
}

export default ProductViewPage;
