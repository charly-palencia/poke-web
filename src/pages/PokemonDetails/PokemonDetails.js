import {useMemo} from "react";
import {Link} from "wouter";

import {Container, Header, SideBar, H5} from "../../core";
import AccountInformation from "../Home/AccountInformation";
import {imageUri} from "../Home/PokemonCard";
import {useFetchPokemon, useFetchPokemonDesccriptions} from "../../api/pokemon";
import {
  CardWrapper,
  PokemonImage,
  PokemonDescription,
  PokemonInfo,
  StatBar,
  PokemonStats,
  BackImg,
} from "./components";
import backImg from "../../assets/back.svg";

const PokemonDetails = ({params}) => {
  const {pokemon, isLoading} = useFetchPokemon(params.name);
  const {
    pokemonSpecie,
    isLoading: isLoadingSpecie,
  } = useFetchPokemonDesccriptions(params.name);

  const [description, category] = useMemo(() => {
    if (isLoading) return [null, null, []];
    const flavorTextEntries = pokemonSpecie?.flavor_text_entries || [];
    const generaList = pokemonSpecie?.genera || [];
    const entry = flavorTextEntries.find(({language: {name}}) => name === "en");
    const genera = generaList.find(({language: {name}}) => name === "en");

    return [entry?.flavor_text, genera?.genus];
  }, [pokemonSpecie, isLoading]);

  return (
    <Container>
      <SideBar>
        <AccountInformation />
      </SideBar>
      <Container flexDirection="column">
        <Header>
          <Link href="/">
            <BackImg src={backImg} />
          </Link>
        </Header>

        <CardWrapper flexDirection="column">
          <Container justifyContent="center">
            <Container
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <PokemonImage src={`${imageUri}/${pokemon.id}.svg`} alt="" />
              <H5 fontSize="16px">{pokemon.name}</H5>
            </Container>
            <Container
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="center"
            >
              <H5 margin="16px 0px">{`Acount ${pokemon.name}`}</H5>
              <PokemonDescription>{description}</PokemonDescription>
            </Container>
          </Container>
          <Container>
            <Container justifyContent="center">
              <PokemonInfo
                flexWrap="wrap"
                type={!isLoading && pokemon && pokemon.types[0].type.name}
              >
                <div>
                  <label>Height: </label> {pokemon.height}
                </div>
                <div>
                  <label>Category:</label> {category}
                </div>
                <div>
                  <label>Weight:</label> {pokemon.weight}{" "}
                </div>
                <div>
                  <label>Abilities:</label>
                  {!isLoading &&
                    pokemon.abilities
                      .map(({ability}) => ability.name)
                      .join(", ")}
                </div>
              </PokemonInfo>
            </Container>
            <Container alignItems="center">
              <PokemonStats>
                {pokemon.stats?.map((stat) => (
                  <Container
                    flexDirection="column"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <StatBar className="bar" baseStat={stat.base_stat} />
                    <label htmlFor="">{stat.stat.name}</label>
                  </Container>
                ))}
              </PokemonStats>
            </Container>
          </Container>
        </CardWrapper>
      </Container>
    </Container>
  );
};

export default PokemonDetails;
