import React from 'react';
import Header from '../../core/Header';
import SideBar from '../../core/SideBar';
import {Container,PokemonImage} from './components';
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())
const fetchImage =  (url) => {
  const regExpUrl = /https:\/\/pokeapi.co\/api\/v2\/pokemon\/(\d+)\//
  const id = url.match(regExpUrl)[1];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
}

function Home(){
  const { data, error } = useSWR('https://pokeapi.co/api/v2/pokemon/', fetcher)
  if (error) return <div>failed to load</div>

  return <Container>
    <SideBar>test</SideBar>
    <Container flexDirection="column">
      <Header></Header>
      <Container flexWrap="wrap">
        {data ?
          data.results.map(pokemon => (
          <Container flexDirection="column">
            <PokemonImage src={fetchImage(pokemon.url)} alt="" />
      <div id="name">{pokemon.name}></div>
          </Container>))
          :
            "loading..."
        }
      </Container>
    </Container>
  </Container>
}

export default Home;
