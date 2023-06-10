import type { GetServerSideProps } from "next";
import ViewProductPage from "views/product/pages/ViewProductPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default ViewProductPage;
