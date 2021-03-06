import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: ${(props) => (props.flexDirection)};
  flex-wrap: ${(props) => (props.flexWrap)};
`;

export const PokemonImage = styled.img`
  max-height: 200px;
`;
