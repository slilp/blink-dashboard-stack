import Page from "views/test";
export async function getServerSideProps(context: any) {
  return {
    props: {
      message: "TEST",
    }, // will be passed to the page component as props
  };
}

export default Page;
