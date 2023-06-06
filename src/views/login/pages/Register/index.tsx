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

function RegisterPage() {
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

            <TextField placeholder="username" fullWidth />
            <TextField placeholder="password" fullWidth />
            <TextField placeholder="confirm password" fullWidth />

            <Button variant="contained" fullWidth>
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
