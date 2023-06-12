import React from "react";
import { Box, Card, Typography } from "@mui/material";

function HomeStat() {
  return (
    <Box display="flex" flexDirection="column" sx={{ gap: "12px" }}>
      <Card>
        <Typography variant="h6" mb="1rem">
          Statistics by shop
        </Typography>
      </Card>
      <Card>
        <Typography variant="h6" mb="1rem">
          Statistics by shop
        </Typography>
      </Card>
    </Box>
  );
}

export default HomeStat;
