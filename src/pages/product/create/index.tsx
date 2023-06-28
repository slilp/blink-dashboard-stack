import type { GetServerSideProps } from "next";
import CreateProductPage from "views/product/pages/CreateProductPage";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        "common",
        "product",
      ])),
    },
  };
};

export default CreateProductPage;
