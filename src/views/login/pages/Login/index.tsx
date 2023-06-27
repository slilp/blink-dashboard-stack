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
import React, { useState, useTransition } from "react";
import UnauthenNavbar from "views/login/components/UnauthenNavbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";
import {
  loginFormValidationSchema,
  LoginFormType,
} from "views/login/utils/loginForm";
import { Controller, Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

function LoginPage() {
  const { t } = useTranslation("login");
  const resolver: Resolver<LoginFormType> = yupResolver(
    loginFormValidationSchema(t)
  );
  const { locale } = useRouter();
  const {
    handleSubmit,
    register,
    watch,
    control,
    reset,
    resetField,
    setValue,
  } = useForm<LoginFormType>({ resolver });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmitLogin = (data: LoginFormType) => {
    signIn("credentials", {
      username: data.username,
      password: data.password,
      callbackUrl: `/${locale}`,
    });
  };

  return (
    <>
      <Head>
        <title>{t("Sign In")}</title>
      </Head>
      <UnauthenNavbar />
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Image
              alt="login bg"
              src="/login/login.jpg"
              height={600}
              width={700}
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
              display="flex"
              component="form"
              flexDirection="column"
              p="1rem"
              sx={{ gap: "1rem", width: { xs: "100%", sm: "60%" } }}
            >
              <Typography variant="h5" textAlign="center">
                {t("Sign In")}
              </Typography>
              <Typography variant="body1" textAlign="center">
                {t("Login with social network")}
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
              <Typography variant="body2" textAlign="end">
                {t("Forget password")} ?
              </Typography>
              <Button
                onClick={handleSubmit(onSubmitLogin)}
                type="submit"
                variant="contained"
                fullWidth
              >
                {t("Sign In")}
              </Button>
              <Typography variant="body1" textAlign="center">
                {t("No Account")} ?{" "}
                <Link href="/register" style={{ textDecoration: "none" }}>
                  {t("Create one")}!
                </Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
