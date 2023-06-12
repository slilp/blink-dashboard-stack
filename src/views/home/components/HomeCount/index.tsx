import { Box, Card, Grid, Typography } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";

function HomeCount() {
  return (
    <Grid container spacing={1} sx={{ height: "100%" }}>
      <Grid item xs={6} md={4}>
        <Card
          sx={{
            height: "100%",
            flex: "1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ mb: "1rem" }}>
              Total Product
            </Typography>
            <Typography variant="h4">56</Typography>
          </Box>
          <Box
            borderRadius="100%"
            height="3.5rem"
            width="3.5rem"
            bgcolor="warning.light"
            color="white"
            textAlign="center"
          >
            <CategoryIcon sx={{ fontSize: "3rem" }} />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={6} md={4}>
        <Card
          sx={{
            height: "100%",
            flex: "1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ mb: "1rem" }}>
              Total Shop
            </Typography>
            <Typography variant="h4">10</Typography>
          </Box>
          <Box
            borderRadius="100%"
            height="3.5rem"
            width="3.5rem"
            bgcolor="secondary.light"
            color="white"
            textAlign="center"
          >
            <ShoppingBasketIcon sx={{ fontSize: "3rem" }} />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          sx={{
            height: "100%",
            flex: "1",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ mb: "1rem" }}>
              Total User
            </Typography>
            <Typography variant="h4">1</Typography>
          </Box>
          <Box
            borderRadius="100%"
            height="3.5rem"
            width="3.5rem"
            bgcolor="info.light"
            color="white"
            textAlign="center"
          >
            <PersonIcon sx={{ fontSize: "3rem" }} />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}

export default HomeCount;
