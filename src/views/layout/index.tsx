import React from "react";
import { Box } from "@mui/material";

function Layout({ children }: any) {
  return (
    <div>
      <div>Navbar</div>
      <div>Footer</div>
      <Box bgcolor="red">Hello world</Box>
      {children}
    </div>
  );
}

export default Layout;
