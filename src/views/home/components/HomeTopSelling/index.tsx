import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import MovingIcon from "@mui/icons-material/Moving";

function HomeTopSelling() {
  return (
    <Card>
      <Typography variant="h6" mb="1rem">
        Best Selling Products 🏆
      </Typography>
      <Box display="flex" flexDirection="column">
        {[1, 2, 3, 4, 5].map(() => (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ gap: "12px" }}
          >
            <Image
              style={{
                borderRadius: "12px",
                objectFit: "cover",
              }}
              alt="im"
              src="/products/macbook-air-midnight.jpeg"
              height="70"
              width="70"
            />
            <Box flex="1" textAlign="center">
              <Typography variant="body1">Iphone 14 Pro</Typography>
              <Typography variant="body1">12,345 B</Typography>
            </Box>
            <Box flex="1" color="success.main" textAlign="center">
              <MovingIcon />
              <Typography variant="body1">12%</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

export default HomeTopSelling;
