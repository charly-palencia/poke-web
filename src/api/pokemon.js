import useSWR from "swr";
import {fetcher} from "./fetcher";

const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
const pokemonShowUrl = "https://pokeapi.co/api/v2/pokemon/";
const pokemonSpeciesUrl = "https://pokeapi.co/api/v2/pokemon-species/";
export const useFetchPokemons = () => {
  const {data, error} = useSWR(pokemonListUrl, fetcher);

  return {
    pokemons: data?.results,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useFetchPokemon = (id) => {
  const {data, error} = useSWR(`${pokemonShowUrl}${id}`, fetcher);

  return {
    pokemon: data || {},
    isLoading: !error && !data,
    isError: error,
  };
};

export const useFetchPokemonDesccriptions = (id) => {
  const {data, error} = useSWR(`${pokemonSpeciesUrl}${id}`, fetcher);

  return {
    pokemonSpecie: data,
    isLoading: !error && !data,
    isError: error,
  };
};
