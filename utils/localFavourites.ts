const toggleFavourite = (id: number) => {
  let favouritesPokemons: number[] = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  );

  if (favouritesPokemons.includes(id)) {
    favouritesPokemons = favouritesPokemons.filter((pokeId) => pokeId !== id);
  } else {
    favouritesPokemons.push(id);
  }

  localStorage.setItem("favourites", JSON.stringify(favouritesPokemons));
};

const isInFavourites = (id: number): boolean => {
  if (typeof window === "undefined") return false;
  
  const favouritesPokemons: number[] = JSON.parse(
    localStorage.getItem("favourites") || "[]"
  );

  return favouritesPokemons.includes(id);
};

export default {
  toggleFavourite,
  isInFavourites,
};
