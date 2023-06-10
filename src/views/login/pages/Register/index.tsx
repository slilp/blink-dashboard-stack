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
  registerFormValidationSchema,
  RegisterFormType,
} from "views/login/utils/registerForm";
import { Controller, Resolver, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function RegisterPage() {
  const resolver: Resolver<RegisterFormType> = yupResolver(
    registerFormValidationSchema()
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
        <title>Register</title>
      </Head>
      <UnauthenNavbar />
      <Toolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{ display: { xs: "none", md: "block" } }}>
          <Box
            component="img"
            src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png"
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
              Create new account
            </Typography>
            <Typography variant="body1" textAlign="center">
              Create new account with social network
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
                  label="Confirm password"
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
              Create new account
            </Button>
            <Typography variant="body1" textAlign="center">
              Already have account ? <Link href="/login"> Sign in</Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default RegisterPage;
