import { Box, Button } from "@mui/material";
import { useSession } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos ipsa
      numquam vel. Ipsam repudiandae omnis, ex commodi, id exercitationem
      repellendus reprehenderit assumenda, voluptate qui eius iusto perferendis
      quos perspiciatis.
    </>
  );
}
