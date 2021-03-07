import React, {useState, useMemo} from "react";
import Fuse from "fuse.js";

import {useFetchPokemons} from "../../api/pokemon";
import PokemonCard from "./PokemonCard";
import AccountInformation from "./AccountInformation";
import {Header, Container, SideBar} from "../../core";
import searchIcon from "../../assets/search-icon.svg";
import {CardList} from "./components";

function Home() {
  const {pokemons, isLoading, isError} = useFetchPokemons();
  const [filter, setFilter] = useState("");
  const results = useMemo(() => {
    if (filter.trim() === "") return pokemons;

    const options = {
      keys: ["name", "url"],
      threshold: 0.3,
    };
    const fuse = new Fuse(pokemons, options);

    const result = fuse.search(filter);
    return result.map(({item}) => item);
  }, [filter, pokemons]);

  const handleInputChange = ({target: {value}}) => {
    setFilter(value);
  };

  if (isError) return <div>failed to load</div>;

  return (
    <Container>
      <SideBar>
        <AccountInformation />
      </SideBar>
      <Container flexDirection="column">
        <Header>
          <Container justifyContent="flex-end" alignItems="center">
            <input
              type=""
              placeholder="Type pikachu..."
              onChange={handleInputChange}
            />
            <img src={searchIcon} alt="" />
          </Container>
        </Header>
        <CardList flexWrap="wrap" justifyContent="flex-start">
          {!isLoading
            ? results.map((pokemon) => <PokemonCard pokemon={pokemon} />)
            : "loading..."}
        </CardList>
      </Container>
    </Container>
  );
}

export default Home;
