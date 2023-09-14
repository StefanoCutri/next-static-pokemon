import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts/Layout";
import { NoFavourites } from "../../components/ui";

import localFavourites from "../../utils/localFavourites";
import { FavouritePokemons } from "@/components/pokemons";

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
        <FavouritePokemons pokemons={favouritePokemons} />
      )}
    </Layout>
  );
};

export default FavouritesPage;
