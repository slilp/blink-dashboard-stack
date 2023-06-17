import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

function HomeWelcome({ name }: { name: string }) {
  const { t } = useTranslation("home");

  return (
    <Box textAlign="center" borderRadius="12px" p={2}>
      <Typography>{t("Welcome")}</Typography>

      <Typography variant="h6">Welcome back : {name}</Typography>
      <Typography variant="body2" sx={{ my: "1rem" }}>
        Amazing dashboard for you to boost you work !.
      </Typography>
      <Button variant="contained">learn more</Button>
    </Box>
  );
}

export default HomeWelcome;
