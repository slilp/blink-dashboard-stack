import type { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { authOptions } from "pages/api/auth/[...nextauth]";
import ViewShopPage from "views/shop/pages/ViewShopPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const { locale } = context;
  if (session?.user.role !== "admin") {
    return {
      redirect: {
        destination: locale === "en" ? "/404" : `/${locale}/404`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        "common",
        "shop",
      ])),
    },
  };
};

export default ViewShopPage;
