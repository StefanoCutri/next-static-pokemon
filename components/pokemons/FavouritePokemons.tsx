import { Card, Grid } from "@nextui-org/react"
import { FavouritePokemonCard } from ".";

interface Props{
    pokemons: number[];
}

export const FavouritePokemons = ({pokemons}: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
    {pokemons.map((id) => (
      <FavouritePokemonCard id={id}/>
    ))}
  </Grid.Container>
  )
}
