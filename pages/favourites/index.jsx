import { Layout } from "../../components/layouts/Layout";
import { NoFavourites } from "../../components/ui";

export const FavouritesPage = () => {
  return (
    <Layout title="Pokemons - Favourites">
      <NoFavourites />;
    </Layout>
  );
};

export default FavouritesPage;
