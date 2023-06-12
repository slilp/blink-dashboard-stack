import HomeWelcome from "views/home/components/HomeWelcome";
import HomeCount from "views/home/components/HomeCount";
import HomeTopSelling from "views/home/components/HomeTopSelling";
import HomeStat from "views/home/components/HomeStat";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { Grid } from "@mui/material";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
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
      </Grid>
    </>
  );
}
