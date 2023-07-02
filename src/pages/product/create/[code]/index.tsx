import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CreateProductCodePage from "views/product/pages/CreateProductCodePage";
import { mockProducts } from "pages/api/product/mockProducts";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale } = context;
  const { code } = context.query;
  const product = mockProducts.find((item) => item.code === code);
  if (!product)
    return {
      redirect: {
        destination: locale === "en" ? "/404" : `/${locale}/404`,
        permanent: false,
      },
    };
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        "common",
        "product",
      ])),
      productInfo: {
        name: product.name,
        desc: product.name,
        stock: 123,
        color: product.colorLabel,
        warranty: true,
        brand: product.brand,
        status: product.status,
        promotions: [
          {
            promotionId: "promo1",
            label: "10% discount",
          },
          {
            promotionId: "promo2",
            label: "20% discount",
          },
        ],
        img: product.img,
      },
    },
  };
};

export default CreateProductCodePage;
