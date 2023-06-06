import type { GetServerSideProps } from "next";
import LoginPage from "views/login/pages/Login";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};

export default LoginPage;
