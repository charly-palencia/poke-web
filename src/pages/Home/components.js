import styled from "styled-components";
import {Container} from "../../core";

export const PokemonImage = styled.img`
  height: 100%;
`;

export const CardList = styled(Container)`
  overflow-y: auto;
  max-height: calc(100vh - 80px);
  padding-top: 80px;
`;

export const CardWrapper = styled(Container)`
  padding: 8px;
  padding-top: 40px;
  margin: 8px;
  height: 300px;
  width: 20%;
  max-width: 20%;
  border: 1px solid transparent;

  &:hover {
    border: 1px solid #d0d0d0;
    cursor: pointer;
  }

  img {
    max-width: 200px;
    min-width: 200px;
  }

  h5 {
    font-style: normal;
    font-weight: 500;
    text-transform: capitalize;
    text-align: center;
  }
`;
