import { Card, Grid } from "@nextui-org/react"

interface Props{
    pokemons: number[];
}

export const FavouritePokemons = ({pokemons}: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
    {pokemons.map((id) => (
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
  )
}
