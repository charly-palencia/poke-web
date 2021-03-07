import styled from "styled-components";
import {Container} from "../../core";
import profile from "../../assets/profile.png";

const AccountInformation = ({className}) => {
  return (
    <Container flexDirection="column" alignItems="center" className={className}>
      <h1>Poke</h1>
      <img src={profile} alt="" />
      <p>Charly Palencia</p>
      <h6>Level 12</h6>
    </Container>
  );
};

const StyledAccountInformation = styled(AccountInformation)`
  color: #ffffff;

  h1 {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    padding: 16px 0px;
  }

  img {
    border-radius: 50%;
    width: 155px;
    height: 155px;
    padding: 8px 0px;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    padding: 16px 0px;
  }

  h6 {
    font-weight: normal;
    font-size: 12px;
    text-align: center;
  }
`;

export default StyledAccountInformation;
