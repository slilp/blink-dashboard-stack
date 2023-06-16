import React from "react";
import { Typography, Stack, List } from "@mui/material";
import { navMenus } from "../navMenus";
import SubMenus from "../SubMenus";
import { useSession } from "next-auth/react";

function Menus({ setExpandMobileMenu }: { setExpandMobileMenu?: any }) {
  const { data: session } = useSession();
  const role: string = (session?.user as any)?.role;

  return (
    <Stack px="1rem">
      {navMenus.map((navMenu, index) =>
        navMenu.roles.length === 0 || navMenu.roles.includes(role) ? (
          <List key={`navMenu-${index}`} sx={{ padding: "0" }}>
            {navMenu.titleSection && (
              <Typography variant="subtitle2" color="grey.700" px="16px">
                {navMenu.titleSection}
              </Typography>
            )}
            {navMenu.mainMenus.map((menu: any, index: number) => (
              <SubMenus
                key={`submenu-section-${index}`}
                menu={menu}
                index={index}
                setExpandMobileMenu={setExpandMobileMenu}
              />
            ))}
          </List>
        ) : null
      )}
    </Stack>
  );
}

export default Menus;
