import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useTranslation } from "next-i18next";
import Image from "next/image";

function HomeWelcome({ name }: { name: string }) {
  const { t } = useTranslation("home");

  return (
    <Card sx={{ backgroundColor: blue[100] }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Image
              style={{ borderRadius: "12px" }}
              alt="welcome"
              src="/home/welcome.jpeg"
              width={200}
              height={150}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <Typography variant="h5" fontWeight={500}>
              {t("Welcome back")}
            </Typography>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" sx={{ my: "1rem" }}>
              {t("Ready to Go dashboard !")}
            </Typography>
            <Button variant="contained"> {t("Get Started")} </Button>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}

export default HomeWelcome;
