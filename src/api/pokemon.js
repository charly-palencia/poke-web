import useSWR from "swr";
import {fetcher} from "./fetcher";

const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
export const useFetchPokemons = () => {
  const {data, error} = useSWR(pokemonListUrl, fetcher);

  return {
    pokemons: data?.results,
    isLoading: !error && !data,
    isError: error,
  };
};
