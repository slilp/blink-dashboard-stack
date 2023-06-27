import HomeWelcome from "views/home/components/HomeWelcome";
import HomeCount from "views/home/components/HomeCount";
import HomeTopSelling from "views/home/components/HomeTopSelling";
import HomeStat from "views/home/components/HomeStat";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { Grid } from "@mui/material";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { data: session } = useSession();
  const { t } = useTranslation("home");

  return (
    <>
      <Head>
        <title>{t("Home")}</title>
      </Head>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={5}>
          <HomeWelcome name={session?.user?.name || "-"} />
        </Grid>
        <Grid item xs={12} md={7}>
          <HomeCount />
        </Grid>
        <Grid item xs={12} md={8}>
          <HomeStat />
        </Grid>
        <Grid item xs={12} md={4}>
          <HomeTopSelling />
        </Grid>
        {/* <Grid item xs={12}>
          <HomeNewProduct />
        </Grid> */}
      </Grid>
    </>
  );
}
