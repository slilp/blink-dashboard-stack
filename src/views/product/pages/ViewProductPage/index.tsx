import {
  Box,
  Button,
  Card,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Head from "next/head";
import React, { useCallback, useState } from "react";
import MenuPopover from "components/MenuPopover";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Table, { ColumnTable } from "components/Table";
import { IProduct } from "../../../../pages/api/product/mockProducts";
import Image from "next/image";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MenuButtonStyled from "components/MenuButtonStyled";
import useFetchProducts from "views/product/components/useFetchProducts";

function ProductViewPage() {
  const [page, setPage] = useState(0);
  const [filterStatus, setFilterStatus] = useState("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<"asc" | "desc">();
  const [selectedCode, setSelectedCode] = useState("");
  const router = useRouter();
  const { t } = useTranslation("product");
  const { data, isLoading } = useFetchProducts({
    status: filterStatus,
    pageIndex: page,
    pageSize: rowsPerPage,
    order,
  });

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onOpenPopover = (event: any, item: IProduct) => {
    setAnchorEl(event.currentTarget);

    setSelectedCode(item.code);
  };

  const columns: ColumnTable<IProduct>[] = [
    {
      title: "",
      dataIndex: "img",
      key: "imgProduct",
      render: (val: IProduct) => (
        <Image
          alt={val.name}
          src={val.img}
          height={50}
          width={50}
          style={{ borderRadius: "12px" }}
        />
      ),
    },
    {
      title: t("Code"),
      dataIndex: "code",
      key: "code",
    },
    {
      title: t("Name"),
      dataIndex: "name",
      key: "name",
    },
    {
      title: t("Brand"),
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: t("Color"),
      dataIndex: "colorLabel",
      key: "colorLabel",
      render: (val: IProduct) => (
        <Box display="flex" sx={{ gap: "8px" }}>
          <Typography variant="body2"> {val.colorLabel}</Typography>
          <Box
            bgcolor={val.colorCode}
            height="20px"
            width="20px"
            borderRadius="100%"
          />
        </Box>
      ),
    },
    {
      title: t("Status"),
      dataIndex: "status",
      key: "status",
      render: (val: IProduct) => (
        <Typography variant="body2"> {mapStatus[val.status]}</Typography>
      ),
    },
    {
      title: t("Action"),
      dataIndex: null,
      key: "action",
      render: (val: IProduct) => (
        <IconButton onClick={(e) => onOpenPopover(e, val)}>
          <MoreVertIcon />
        </IconButton>
      ),
    },
  ];

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

  const mapStatus = {
    selling: t("Selling"),
    waiting: t("Waiting"),
    stop: t("Stop"),
  };

  return (
    <>
      <Head>
        <title>{t("Product")}</title>
        <meta name="description" content="Product" />
      </Head>
      <Box display="flex" justifyContent="space-between" mb="2rem">
        <Typography variant="h6"> {t("Products")}</Typography>
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={() => router.push("/product/create/")}
        >
          {t("Create new product")}
        </Button>
      </Box>
      <Card sx={{ padding: "0" }}>
        <Box p={2}>
          <Typography variant="body1">
            {t("Total record")} {data?.data?.total}
          </Typography>
        </Box>
        <Divider />

        <Tabs value={filterStatus} onChange={handleFilterStatus}>
          <Tab value="all" label={t("All")} />
          <Tab value="selling" label={t("Selling")} />
          <Tab value="waiting" label={t("Waiting")} />
          <Tab value="stop" label={t("Stop")} />
        </Tabs>

        <Divider />
        <Table<IProduct>
          columns={columns}
          page={page}
          totalRecord={data?.data?.total || 0}
          isLoading={isLoading}
          dataSource={data?.data?.products || []}
          notFoundText="No data"
          onChangeRowPerPage={onChangeRowsPerPage}
          onChangePage={onChangePage}
          rowsPerPageOptions={[5, 10, 15]}
          rowsPerPage={rowsPerPage}
          order={order}
          orderBy="code"
          onSort={onSortCode}
        />
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
                url: `/product/create/${selectedCode}`,
              },
              {
                key: "popover-edit-btn",
                label: t("Edit"),
                icon: <ModeEditIcon fontSize="small" />,
                color: "text.secondary",
                url: `/product/create/${selectedCode}`,
              },
              {
                key: "popover-del-btn",
                label: t("Delete"),
                icon: <DeleteForeverIcon fontSize="small" />,
                color: "error.main",
                url: "",
              },
            ].map((pop) => (
              <ListItem key={pop.key} disablePadding>
                <MenuButtonStyled
                  onClick={() => (pop.url ? router.push(pop.url) : null)}
                >
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
      </Card>
    </>
  );
}

export default ProductViewPage;
