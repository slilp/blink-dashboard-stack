import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CreateProductPage from "views/product/pages/CreateProductPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { code } = context.query;

  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, [
        "common",
        "product",
      ])),
      productInfo: {
        name: "Macbook pro",
        desc: "Amazing new macbook",
        stock: 123,
        color: "Space grey",
        warranty: true,
        brand: "Apple",
        status: "selling",
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
        img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
      },
    },
  };
};

export default CreateProductPage;
