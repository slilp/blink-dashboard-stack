import { PopoverProps, Popover, alpha } from "@mui/material";
import React from "react";

function MenuPopover({ children, ...props }: PopoverProps) {
  return (
    <Popover
      PaperProps={{
        sx: {
          p: "0.5rem",
          borderRadius: "12px",
          boxShadow: 1,
          backgroundImage: "none",
          backdropFilter: "blur(6px)",
          backgroundColor: "background.paper",
          opacity: 0.8,
          transition: "height 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
      }}
      {...props}
    >
      {children}
    </Popover>
  );
}

export default MenuPopover;
