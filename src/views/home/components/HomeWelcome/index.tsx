import { Box, Button, Typography } from "@mui/material";

function HomeWelcome({ name }: { name: string }) {
  return (
    <Box textAlign="center" borderRadius="12px" p={2}>
      <Typography variant="h6">Welcome back : {name}</Typography>
      <Typography variant="body2" sx={{ my: "1rem" }}>
        Amazing dashboard for you to boost you work !.
      </Typography>
      <Button variant="contained">learn more</Button>
    </Box>
  );
}

export default HomeWelcome;
