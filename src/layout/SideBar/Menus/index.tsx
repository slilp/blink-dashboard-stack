import React from "react";
import { Typography, Stack, List, Box, Divider, Button } from "@mui/material";
import { navMenus } from "../navMenus";
import SubMenus from "../SubMenus";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

function Menus({ setExpandMobileMenu }: { setExpandMobileMenu?: any }) {
  const { data: session } = useSession();
  const role: string = (session?.user as any)?.role;
  const { t } = useTranslation();

  return (
    <Stack px="1rem" sx={{ height: "100%" }}>
      {navMenus(t).map((navMenu, index) =>
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

      <Stack
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          sx={{ gap: "8px" }}
          bgcolor="grey.100"
          borderRadius="12px"
          minHeight="150px"
          p={1}
          mt={5}
          mb={2}
        >
          <Image
            style={{ marginTop: "-45px" }}
            alt="more information"
            height={80}
            width={80}
            src="/home/info.png"
          />
          <Typography variant="body2" textAlign="center">
            {t("If you want more information")}
          </Typography>
          <Button variant="contained">{t("Support")}</Button>
        </Box>
        <Divider />
      </Stack>
    </Stack>
  );
}

export default Menus;
