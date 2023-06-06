import type { GetServerSideProps } from "next";
import RegisterPage from "views/login/pages/Register";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default RegisterPage;
