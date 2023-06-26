import { Box, Button, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { useTranslation } from "next-i18next";
import Image from "next/image";

function HomeWelcome({ name }: { name: string }) {
  const { t } = useTranslation("home");

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderRadius="12px"
      p={2}
      bgcolor={orange[100]}
    >
      <Box textAlign="center">
        <Typography variant="h5" fontWeight="bold">
          🎉 Welcome back
        </Typography>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" sx={{ my: "1rem" }}>
          Ready to Go dashboard !
        </Typography>
        <Button variant="contained">Get Started</Button>
      </Box>
      <Box>
        <Image
          style={{ borderRadius: "12px" }}
          alt="welcome"
          src="/home/welcome.jpg"
          width={200}
          height={150}
        />
      </Box>
    </Box>
  );
}

export default HomeWelcome;
