import {
  Box,
  Typography,
  Card,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  SelectChangeEvent,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Autocomplete,
} from "@mui/material";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  createProductFormValidationSchema,
  CreateProductFormType,
} from "../../utils/createProductForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, Resolver, useForm } from "react-hook-form";
import UploadFile from "components/UploadFile";
import { useTranslation } from "next-i18next";

const promotionList = [
  { promotionId: "promo1", label: "10% discount" },
  { promotionId: "promo2", label: "20% discount" },
  { promotionId: "promo3", label: "30% discount" },
  { promotionId: "promo4", label: "50% discount" },
  { promotionId: "promo5", label: "Buy 1 get 1 free" },
];

function CreateProductForm({ handleSubmit, control, isEdit = false }: any) {
  const { t } = useTranslation("product");

  const onSubmitLogin = (data: CreateProductFormType) => {
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>{t("Product")}</title>
      </Head>
      <Box display="flex" justifyContent="space-between" mb="2rem">
        <Typography variant="h6">
          {isEdit ? t("Update Product") : t("Create New Product")}
        </Typography>
      </Box>
      <Box component="form">
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%" }}>
              <Grid container spacing={1} sx={{ height: "100%" }}>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    height="100%"
                  >
                    <Controller
                      defaultValue={null}
                      name="img"
                      control={control}
                      render={({
                        field: { onChange, value },
                        fieldState: { error },
                      }) => (
                        <UploadFile
                          acceptType={{
                            "image/*": [],
                          }}
                          label={t("Max image size 10 GB")}
                          uploadLabel={t("Upload product here")}
                          maxSize={10485760}
                          file={value}
                          errorMesssage={error?.message}
                          onChange={onChange}
                          onRemove={() => onChange(null)}
                        />
                      )}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card sx={{ flex: "1" }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    defaultValue=""
                    name="name"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        error={!!error?.message}
                        helperText={error?.message || ""}
                        onChange={onChange}
                        value={value}
                        label={t("Name")}
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="stock"
                    defaultValue=""
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        error={!!error?.message}
                        helperText={error?.message || ""}
                        onChange={(e) => {
                          if (!isNaN(+e.target.value))
                            onChange(+e.target.value);
                        }}
                        value={value + ""}
                        label={t("Stock")}
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    defaultValue=""
                    name="brand"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        error={!!error?.message}
                        helperText={error?.message || ""}
                        onChange={onChange}
                        value={value}
                        label={t("Brand")}
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    defaultValue=""
                    name="color"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        error={!!error?.message}
                        helperText={error?.message || ""}
                        onChange={onChange}
                        value={value}
                        label={t("Color")}
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    defaultValue={false}
                    name="warranty"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <FormControl>
                        <FormLabel>{t("Warranty")}</FormLabel>
                        <RadioGroup
                          defaultValue={false}
                          value={value}
                          onChange={onChange}
                        >
                          <FormControlLabel
                            value={true}
                            control={<Radio />}
                            label="Warranty"
                          />
                          <FormControlLabel
                            value={false}
                            control={<Radio />}
                            label="No Warranty"
                          />
                        </RadioGroup>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    defaultValue=""
                    name="desc"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        multiline
                        rows={3}
                        error={!!error?.message}
                        helperText={error?.message || ""}
                        onChange={onChange}
                        value={value}
                        label={t("Description")}
                        fullWidth
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Controller
                    defaultValue=""
                    name="status"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <FormControl fullWidth error={!!error?.message}>
                        <InputLabel> {t("Status")}</InputLabel>

                        <Select
                          value={value}
                          label="Status"
                          onChange={onChange}
                          defaultValue=""
                          renderValue={(value) => value}
                        >
                          <MenuItem value="selling">Selling</MenuItem>
                          <MenuItem value="waiting">Waiting</MenuItem>
                          <MenuItem value="stop">Stop</MenuItem>
                        </Select>
                        <FormHelperText>{error?.message || ""}</FormHelperText>
                      </FormControl>
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    defaultValue={[]}
                    name="promotions"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <Autocomplete
                        multiple
                        options={promotionList}
                        getOptionLabel={(option) => option.label}
                        defaultValue={[]}
                        onChange={(e: any, newValue: any) => {
                          onChange(newValue);
                        }}
                        value={value}
                        isOptionEqualToValue={(option: any, value: any) =>
                          option.promotionId === value.promotionId
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label={t("Promotion")}
                            error={!!error?.message}
                            helperText={error?.message || ""}
                          />
                        )}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Box textAlign="end">
                    <Button
                      onClick={handleSubmit(onSubmitLogin)}
                      type="submit"
                      variant="contained"
                    >
                      {isEdit ? t("Update Product") : t("Create New Product")}{" "}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default CreateProductForm;
