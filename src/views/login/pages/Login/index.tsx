import {
  Grid,
  Toolbar,
  Box,
  Card,
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
  loginFormValidationSchema,
  LoginFormType,
} from "views/login/utils/loginForm";
import { Controller, Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { signIn } from "next-auth/react";

function LoginPage() {
  const resolver: Resolver<LoginFormType> = yupResolver(
    loginFormValidationSchema()
  );
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
      callbackUrl: "/",
    });
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <UnauthenNavbar />
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            component="img"
            src="https://minimals.cc/assets/illustrations/illustration_dashboard.png"
            width="100%"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            display="flex"
            flexDirection="column"
            p="1rem"
            m="auto"
            sx={{ gap: "1rem", width: { xs: "100%", sm: "60%" } }}
          >
            <Typography variant="h5" textAlign="center">
              Sign In
            </Typography>
            <Typography variant="body1" textAlign="center">
              Login with social network
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
                OR
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
                  label="Username"
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
                  label="Password"
                  fullWidth
                  helperText={error?.message || ""}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((state) => !state)}
                          onMouseDown={() => setShowPassword((state) => !state)}
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
              Forget password ?
            </Typography>
            <Button
              onClick={handleSubmit(onSubmitLogin)}
              type="submit"
              variant="contained"
              fullWidth
            >
              Sign in
            </Button>
            <Typography variant="body1" textAlign="center">
              New account ? <Link href="/register"> Create new account</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
