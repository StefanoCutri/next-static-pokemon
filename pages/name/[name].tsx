import { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";

import confetti from "canvas-confetti";

import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { getPokemonInfo, localFavourites } from "@/utils";

interface Props {
  pokemon: Pokemon;
}
const PokemonByNamePage = ({ pokemon }: Props) => {
  const [isFavourite, setIsFavourite] = useState(
    localFavourites.isInFavourites(pokemon.id)
  );

  const onTogglePokemon = () => {
    localFavourites.toggleFavourite(pokemon.id);
    setIsFavourite(!isFavourite);

    if (isFavourite) return;

    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 1,
        // since they fall down, start a bit higher than random
        y: 0,
      },
    });
  };

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: "30px" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "./no-imgae.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-between" }}
            >
              <Text h1 transform="capitalize">
                {pokemon.name}
              </Text>
              <Button
                color="gradient"
                ghost={!isFavourite}
                onClick={onTogglePokemon}
              >
                {isFavourite ? "Added!" : "Add to favourites"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const {
    data: { results },
  } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");

  return {
    paths: results.map((pokemon) => ({
      params: { name: pokemon.name },
    })),
    fallback: "blocking",
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByNamePage;
