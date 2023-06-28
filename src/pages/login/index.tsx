import type { GetServerSideProps } from "next";
import { getServerSession } from "next-auth";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { authOptions } from "pages/api/auth/[...nextauth]";
import LoginPage from "views/login/pages/Login";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  const { locale } = context;
  if (session) {
    return {
      redirect: {
        destination: locale === "en" ? "/404" : `/${locale}/404`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["login"])),
    },
  };
};

export default LoginPage;
