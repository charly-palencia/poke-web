import styled from "styled-components";
import {Container} from "../../core";
import statsImg from "../../assets/Stats.png";

export const CardWrapper = styled(Container)`
  padding: 8px;
  padding-top: 100px;
  margin: 8px;
`;

export const PokemonImage = styled.img`
  margin: 16px;
  height: 60%;
`;

export const PokemonDescription = styled.p`
  width: 50%;
`;

const imageType = "https://cdn.bulbagarden.net/upload/";
const typeUrls = {
  normal: "9/95/Normal_icon_SwSh.png",
  fighting: "3/3b/Fighting_icon_SwSh.png",
  flying: "b/b5/Flying_icon_SwSh.png",
  poison: "8/8d/Poison_icon_SwSh.png",
  ground: "2/27/Ground_icon_SwSh.png",
  rock: "1/11/Rock_icon_SwSh.png",
  bug: "9/9c/Bug_icon_SwSh.png",
  ghost: "0/01/Ghost_icon_SwSh.png",
  steel: "0/09/Steel_icon_SwSh.png",
  fire: "a/ab/Fire_icon_SwSh.png",
  water: "8/80/Water_icon_SwSh.png",
  grass: "a/a8/Grass_icon_SwSh.png",
  electric: "7/7b/Electric_icon_SwSh.png",
  psychic: "7/73/Psychic_icon_SwSh.png",
  ice: "1/15/Ice_icon_SwSh.png",
  dragon: "7/70/Dragon_icon_SwSh.png",
  dark: "d/d5/Dark_icon_SwSh.png",
  fairy: "c/c6/Fairy_icon_SwSh.png",
  unknown: "5/56/UnknownIC_PBR.png",
  shadow: "5/56/UnknownIC_PBR.png",
};

const getTypeUrl = (type) => {
  if (!type) return "";
  return `${imageType}${typeUrls[type] || typeUrls.unknown}`;
};

export const BackImg = styled.img`
  width: 24px;
  margin-right: 16px;
  cursor: pointer;
`;

export const PokemonInfo = styled(Container)`
  flex: 0.7;
  background: url("${(props) => getTypeUrl(props.type)}") no-repeat center;
  background-size: 90px;

  & > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #787878;

    label {
      font-weight: bold;
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const StatBar = styled.div`
  width: 25px;
  background: #f2cd3c;
  margin-bottom: 10px;
  height: ${(props) => props.baseStat || 0}%;
`;

export const PokemonStats = styled(Container)`
  flex: 0.9;
  height: 60%;
  ${Container} {
    width: calc(16% - 8px);
    margin-right: 8px;
  }
  background: url("${statsImg}") no-repeat center;

  label {
    text-align: center;
    overflow: hidden;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
