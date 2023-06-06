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
} from "@mui/material";
import Head from "next/head";
import React from "react";
import UnauthenNavbar from "views/login/components/UnauthenNavbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

function LoginPage() {
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

            <TextField placeholder="username" fullWidth />
            <TextField placeholder="password" fullWidth />
            <Typography variant="body2" textAlign="end">
              Forget password ?
            </Typography>
            <Button variant="contained" fullWidth>
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
