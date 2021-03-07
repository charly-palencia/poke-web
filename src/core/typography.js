import styled from "styled-components";

export const H5 = styled.h5`
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
`;
