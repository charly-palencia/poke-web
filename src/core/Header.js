import styled from "styled-components";
import {Container} from "../core";

const Header = styled.header`
  height: 55px;
  width: calc(100% - 298px);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.95);
  position: fixed;
  display: flex;
  justify-content: flex-end;

  ${Container} {
    flex: none;
    width: 50%;

    input {
      outline: none;
      font-size: 20px;
      line-height: 30px;
      border: 0px;
      border-bottom: 1px solid #d0d0d0;
      width: 50%;

      &:focus {
        outline: none;
      }
    }

    img {
      padding-left: 8px;
      height: 30px;
    }
  }
`;

export default Header;
