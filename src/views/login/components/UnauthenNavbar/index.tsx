import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";

function UnauthenNavbar() {
  const { locale, push, asPath } = useRouter();
  return (
    <AppBar
      sx={{
        boxShadow: "none",
        backgroundImage: "none",
        position: "fixed",
        top: "0",
        left: "auto",
        right: "0",
        zIndex: "1000",
        background: "transparent",
        color: "black",
      }}
    >
      <Toolbar>
        <Container maxWidth="xl">
          <Box display="flex" width="100%" justifyContent="space-between">
            <Typography variant="h5" fontWeight="bold">
              BLINK ME CODE
            </Typography>
            {locale === "th" ? (
              <Button onClick={() => push(asPath, asPath, { locale: "en" })}>
                TH
                <Typography component="span" variant="h5" ml="0.5rem">
                  🇹🇭
                </Typography>
              </Button>
            ) : (
              <Button onClick={() => push(asPath, asPath, { locale: "th" })}>
                EN
                <Typography component="span" variant="h5" ml="0.5rem">
                  🇬🇧
                </Typography>
              </Button>
            )}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default UnauthenNavbar;
