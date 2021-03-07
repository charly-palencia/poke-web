import styled from "styled-components";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex: 1;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => props.padding};
`;

export default Container;
