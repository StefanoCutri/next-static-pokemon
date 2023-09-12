import { Layout } from "@/components/layouts";
import { Button } from "@nextui-org/react";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title='Pokemon List'>
        <h1>Hola mundo</h1>
        <Button>Press me</Button>
      </Layout>
    </>
  );
};
export default HomePage;
