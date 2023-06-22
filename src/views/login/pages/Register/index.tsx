import {
  Grid,
  Toolbar,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
  InputAdornment,
} from "@mui/material";
import Head from "next/head";
import React, { useState } from "react";
import UnauthenNavbar from "views/login/components/UnauthenNavbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import {
  registerFormValidationSchema,
  RegisterFormType,
} from "views/login/utils/registerForm";
import { Controller, Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "next/image";
import { useTranslation } from "next-i18next";

function RegisterPage() {
  const { t } = useTranslation("login");
  const resolver: Resolver<RegisterFormType> = yupResolver(
    registerFormValidationSchema(t)
  );
  const {
    handleSubmit,
    register,
    watch,
    control,
    reset,
    resetField,
    setValue,
  } = useForm<RegisterFormType>({ resolver });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmitRegister = () => {};

  return (
    <>
      <Head>
        <title>{t("Create new account")}</title>
      </Head>
      <UnauthenNavbar />
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Image
              alt="login bg"
              src="/login/register.jpeg"
              height={600}
              width={800}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Box
              component="form"
              display="flex"
              flexDirection="column"
              p="1rem"
              m="auto"
              sx={{ gap: "1rem", width: { xs: "100%", sm: "60%" } }}
            >
              <Typography variant="h5" textAlign="center">
                {t("Create new account")}
              </Typography>
              <Typography variant="body1" textAlign="center">
                {t("Create new account with social network")}
              </Typography>
              <Box display="flex" justifyContent="center" sx={{ gap: "1rem" }}>
                <IconButton sx={{ color: "#1877f2" }}>
                  <FacebookIcon fontSize="large" />
                </IconButton>
                <IconButton sx={{ color: "#DB4437" }}>
                  <GoogleIcon fontSize="large" />
                </IconButton>
              </Box>
              <Divider />
              <Box m="auto" marginTop="-1.75rem" bgcolor="#ffffff" width="3rem">
                <Typography variant="body1" textAlign="center">
                  {t("OR")}
                </Typography>
              </Box>

              <Controller
                name="username"
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
                    label={t("Username")}
                    fullWidth
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    type={showPassword ? "text" : "password"}
                    error={!!error?.message}
                    onChange={onChange}
                    value={value}
                    label={t("Password")}
                    fullWidth
                    helperText={error?.message || ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword((state) => !state)}
                            onMouseDown={() =>
                              setShowPassword((state) => !state)
                            }
                          >
                            {showPassword ? (
                              <Visibility fontSize="small" />
                            ) : (
                              <VisibilityOff fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />

              <Controller
                name="confirmPassword"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    type={showConfirmPassword ? "text" : "password"}
                    error={!!error?.message}
                    onChange={onChange}
                    value={value}
                    label={t("Confirm password")}
                    fullWidth
                    helperText={error?.message || ""}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() =>
                              setShowConfirmPassword((state) => !state)
                            }
                            onMouseDown={() =>
                              setShowConfirmPassword((state) => !state)
                            }
                          >
                            {showConfirmPassword ? (
                              <Visibility fontSize="small" />
                            ) : (
                              <VisibilityOff fontSize="small" />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                )}
              />
              <Button
                onClick={handleSubmit(onSubmitRegister)}
                type="submit"
                variant="contained"
                fullWidth
              >
                {t("Create new account")}
              </Button>
              <Typography variant="body1" textAlign="center">
                {t("Already have an account")} ?{" "}
                <Link href="/login" style={{ textDecoration: "none" }}>
                  {t("Sign In")}
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default RegisterPage;
