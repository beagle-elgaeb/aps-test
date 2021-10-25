import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

function Header() {
  return (
    <HeaderContainer className="App-header">
      <Title>Characters "Rick and Morty" for APSolutions</Title>
      <nav>
        <MenuItem exact to="/" activeClassName="link_active">About caracters</MenuItem >
        <MenuItem to="/about-me" activeClassName="link_active">About me</MenuItem >
      </nav>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 3px 20px 1px yellowgreen;
  padding: 0 50px 0 50px;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  line-height: 60px;
  font-weight: 600;
  color: yellowgreen;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    margin: 20px 0 15px 0;
  }
`;

const MenuItem = styled(NavLink)`
  font-size: 20px;
  line-height: 60px;
  font-weight: 600;
  text-decoration: none;
  color: yellow;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 16px;
    line-height: 50px;
  }

  &.link_active {
    display: none;
  }

  :hover {
    text-shadow: 0 0 8px, 0 0 8px, 0 0 8px;
  }
`;