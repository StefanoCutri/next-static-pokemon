import { Layout } from "@/components/layouts";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";

interface Props {
  id: string;
  name: string;
}
const PokemonPage = ({ id, name }: Props) => {
  return (
    <Layout>
      <h1>
        #{id} - {name}
      </h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
    ],
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      id: "1",
      name: "Pokemon",
    },
  };
};

export default PokemonPage;
