import { MoreHorizRounded, MoreVertRounded } from "@mui/icons-material";
import { Card, Typography, Box, Grid, IconButton } from "@mui/material";
import React from "react";

function ShopCard({ pic }: any) {
  return (
    <Card>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography>Open</Typography>
            <Box>
              <Typography variant="body1">Com7 อยุธยา</Typography>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore rerum facilis porro, facere placeat pariatur impedit
                suscipit laborum a cum? Vel tempore in ea dolor eos. Eaque odit
                facere facilis.
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <MoreHorizRounded />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            width="100%"
            height={{ xs: "125px", md: "200px" }}
            component="img"
            src={pic}
            borderRadius="12px"
            sx={{ objectFit: "cover" }}
          />
        </Grid>
      </Grid>
    </Card>
  );
}

export default ShopCard;
