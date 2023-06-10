import type { GetServerSideProps } from "next";
import ViewShopPage from "views/shop/pages/ViewShopPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default ViewShopPage;
