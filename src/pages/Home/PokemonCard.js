import {PokemonImage, CardWrapper} from "./components";
import {Link} from "wouter";

export const imageUri =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";
export const fetchImage = (url) => {
  const regExpUrl = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\//;
  const id = url.match(regExpUrl)[1];
  return `${imageUri}/${id}.svg`;
};

const PokemonCard = ({pokemon}) => {
  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <CardWrapper flexDirection="column" alignItems="center">
        <PokemonImage src={fetchImage(pokemon.url)} alt="" />
        <h5 id="name">{pokemon.name}</h5>
      </CardWrapper>
    </Link>
  );
};

export default PokemonCard;
