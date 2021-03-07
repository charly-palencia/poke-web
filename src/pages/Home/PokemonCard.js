import {PokemonImage, CardWrapper} from "./components";

const fetchImage = (url) => {
  const regExpUrl = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\//;
  const id = url.match(regExpUrl)[1];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
};

const PokemonCard = ({pokemon}) => {
  return (
    <CardWrapper flexDirection="column" alignItems="center">
      <PokemonImage src={fetchImage(pokemon.url)} alt="" />
      <h5 id="name">{pokemon.name}</h5>
    </CardWrapper>
  );
};

export default PokemonCard;
