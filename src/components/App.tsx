import { NavLink, Route } from "react-router-dom";
import styled from "styled-components/macro";
import Persons from "./Persons";

function App() {
  return (
    <>
      <Header className="App-header">
        <Title>Characters "Rick and Morty" for APSolutions</Title>
        <nav>
          <MenuItem exact to="/" activeClassName="link_active">About caracters</MenuItem >
          <MenuItem to="/about-me" activeClassName="link_active">About me</MenuItem >
        </nav>
      </Header>
      <Main>
        <Route exact path="/:page">
          <Persons />
        </Route>
        <Route exact path="/">
          <Persons />
        </Route>
        <Route path="/about-me">
          <Person>
            <Image src="https://avatars.githubusercontent.com/u/81292823?v=4" alt="Евгения Никонова" />
            <Name>Евгения</Name>
            <Text>Я сейчас заканчиваю обучение на курсе веб-разработки в Яндекс.Практикум.</Text>
            <Text>Работаю инженером-конструктором на опытном производстве.</Text>
            <Text>Люблю тестовые задания.</Text>
            <Text>Не люблю длинные собеседования.</Text>
            <Text>Мой GitHub: </Text>https://github.com/beagle-elgaeb
            <Text>Моё резюме: </Text>https://hh.ru/resume/4afe5798ff093bebf90039ed1f667632626873
          </Person>
        </Route>
      </Main>
      <Footer>
        <Copiright href="https://github.com/beagle-elgaeb">2021 ©Никонова Евгения</Copiright>
      </Footer>
    </>
  )
}

export default App;

const Header = styled.header`
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

const Main = styled.main`
  min-width: 320px;
  width: 80%;
  max-width: 1200px;
  margin: 50px auto 50px auto;
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 0, 0.15);
  border-radius: 20px;
  box-shadow: 0 0 5px 2px yellowgreen;
  padding: 0 0 10px 0;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
  margin: 0 0 10px 0;
`;

const Name = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  color: yellowgreen;
  margin: 20px auto 20px auto;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: yellowgreen;
  margin: 0 10px 10px 10px;
  
  ::last-child {
    margin: 0;
  }
`;

const Footer = styled.footer`
  box-shadow: 0 -3px 20px 1px yellowgreen;
`;

const Copiright = styled.a`
  font-size: 14px;
  line-height: 60px;
  font-weight: 400;
  text-decoration: none;
  color: yellowgreen;
  margin: 0 0 0 20px;
`;
