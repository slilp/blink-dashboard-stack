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
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Controller, Resolver, useForm } from "react-hook-form";
import UploadFile from "components/UploadFile";

const promotionList = [
  { promotionId: "promo1", label: "10% discount" },
  { promotionId: "promo2", label: "20% discount" },
  { promotionId: "promo3", label: "30% discount" },
  { promotionId: "promo4", label: "50% discount" },
  { promotionId: "promo5", label: "Buy 1 get 1 free" },
];

function CreateProductPage({ productInfo }: any) {
  const resolver: Resolver<CreateProductFormType> = yupResolver(
    createProductFormValidationSchema()
  );
  const {
    handleSubmit,
    register,
    watch,
    control,
    reset,
    resetField,
    setValue,
  } = useForm<CreateProductFormType>({ resolver });
  const [showPassword, setShowPassword] = useState(false);
  const watchAllField = watch();
  const onSubmitLogin = (data: CreateProductFormType) => {
    console.log(data);
  };

  useEffect(() => {
    if (productInfo) reset(productInfo);
  }, []);

  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product" />
      </Head>
      <Box display="flex" justifyContent="space-between" mb="2rem">
        <Typography variant="h6">Create New Product</Typography>
      </Box>
      <Box component="form">
        <Grid container spacing={1}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: "100%" }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <Controller
                    defaultValue=""
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
                        maxSize={10485760}
                        file={value}
                        errorMesssage={error?.message}
                        onChange={onChange}
                        onRemove={() => onChange(null)}
                      />
                    )}
                  />
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
                        defaultValue=""
                        value={value}
                        label="Name"
                        fullWidth
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="stock"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <TextField
                        defaultValue=""
                        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                        error={!!error?.message}
                        helperText={error?.message || ""}
                        onChange={onChange}
                        value={value + ""}
                        label="Stock"
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
                        defaultValue=""
                        error={!!error?.message}
                        helperText={error?.message || ""}
                        onChange={onChange}
                        value={value}
                        label="Brand"
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
                        defaultValue=""
                        error={!!error?.message}
                        helperText={error?.message || ""}
                        onChange={onChange}
                        value={value}
                        label="Color"
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
                        <FormLabel>Gender</FormLabel>
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
                        defaultValue=""
                        multiline
                        rows={3}
                        error={!!error?.message}
                        helperText={error?.message || ""}
                        onChange={onChange}
                        value={value}
                        label="Description"
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
                        <InputLabel>Status</InputLabel>

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
                            label="Promotion"
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
                      Create new product
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

export default CreateProductPage;
