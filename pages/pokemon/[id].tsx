import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import { Pokemon } from "@/interfaces";
import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";

interface Props {
  pokemon: Pokemon;
}
const PokemonPage = ({ pokemon }: Props) => {
  console.log(pokemon);

  return (
    <Layout>
      <h1></h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemonsTo151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    paths: pokemonsTo151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
console.log(data);

  return {
    props: {
      pokemon: data
    },
  };
};

export default PokemonPage;
