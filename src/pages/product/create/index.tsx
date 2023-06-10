import type { GetServerSideProps } from "next";
import CreateProductPage from "views/product/pages/CreateProductPage";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default CreateProductPage;
