import { useEffect, useState } from "react";
import { Card, Grid } from "@nextui-org/react";

import localFavourites from "../../utils/localFavourites";
import { Layout } from "../../components/layouts/Layout";
import { NoFavourites } from "../../components/ui";

export const FavouritesPage = () => {
  const [favouritePokemons, setFavouritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavouritePokemons(localFavourites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favourites">
      {favouritePokemons.length === 0 ? (
        <NoFavourites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favouritePokemons.map((id) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={id}>
              <Card hoverable clickable css={{ padding: 10 }}>
                <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  width="100%"
                  height={140}
                />
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavouritesPage;
