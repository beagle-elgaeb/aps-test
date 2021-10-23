import { useEffect, useState } from "react";
import styled from "styled-components";
import * as api from "../utils/Api";
import { CharacterData, Info } from "../utils/types"

function App() {
  const [persons, setPersons] = useState<CharacterData[]>([]);
  const [info, setInfo] = useState<Info>();

  useEffect(() => {
    async function loadCharacters() {
      const characters = await api.getCharacters();

      if (!characters) {
        return;
      }

      setPersons(characters.results);
      setInfo(characters.info);
    }

    loadCharacters();
  }, []);

  console.log(info);
  
  return (
    <Body>
      <Header className="App-header">
        <Title>Characters "Rick and Morty" for APSolutions</Title>
        <div>
          <Link>About caracters</Link>
          <Link>About me</Link>
        </div>
      </Header>
      <Main>
        <Persons>
          {persons.map((person, i) => (
            <Person key={i}>
              <Image src={person.image} alt={person.name} />
              <Name>{person.name}</Name>
              <Text>Разновидность: {person.species}</Text>
              <Text>Местоположение: {person.location.name}</Text>
              <Text>Номера эпизодов: -запросить-</Text>
            </Person>
          ))}
        </Persons>
        <Buttons>
          ...<Number></Number> <Number></Number> <Number></Number>...
        </Buttons>
      </Main>
      <Footer>
        <Copiright href="https://github.com/beagle-elgaeb">2021 (c) Никонова Евгения</Copiright>
      </Footer>
    </Body>
  )
}

export default App;

const Body = styled.div`
  background: black;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 20px 1px yellowgreen;
  padding: 0 20px 0 20px;

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
`;

const Link = styled.a`
  font-size: 20px;
  line-height: 60px;
  font-weight: 600;
  color: yellow;
  margin: 0 0 0 30px;
`;

const Main = styled.main`
  min-width: 320px;
  width: 80%;
  max-width: 1200px;
  margin: 50px auto 50px auto;
`;

const Persons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 50px 0 19px 0;

  @media (max-width: 1020px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 0, 0.15);
  border-radius: 20px;
  box-shadow: 0 0 5px 2px yellowgreen;
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
  margin: 0 0 20px 0;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: yellowgreen;
  margin: 0 0 10px 0;
  
  ::last-child {
    margin: 0;
  }
`;

const Buttons = styled.div`
  display: flex;
`;

const Number = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

const Footer = styled.footer`
  box-shadow: 0 1px 20px 1px yellowgreen;
`;

const Copiright = styled.a`
  font-size: 14px;
  line-height: 60px;
  font-weight: 400;
  text-decoration: none;
  color: yellowgreen;
  margin: 0 0 0 20px;
`;
