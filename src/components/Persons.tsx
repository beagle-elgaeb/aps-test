import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components/macro";
import * as api from "../utils/Api";
import { CharacterData, Info } from "../utils/types"

function Persons() {
  const [persons, setPersons] = useState<CharacterData[]>([]);
  const [info, setInfo] = useState<Info>();
  const { page = "1" } = useParams<{ page?: string }>();

  useEffect(() => {
    async function loadCharacters() {
      const characters = await api.getCharacters(page);

      if (!characters) {
        return;
      }

      setPersons(characters.results);
      setInfo(characters.info);
    }

    loadCharacters();
  }, [page]);

  const pagePrev = String(Number(page) - 1);
  const pageNext = String(Number(page) + 1);

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <PersonsContainer>
        {persons.map((person, i) => (
          <Person key={i}>
            <Image src={person.image} alt={person.name} />
            <Name>{person.name}</Name>
            <Text>Разновидность: {person.species}</Text>
            <Text>Местоположение: {person.location.name}</Text>
          </Person>
        ))}
      </PersonsContainer>
      <Buttons>
        {info?.prev &&
          <>
            <PageLink to={pagePrev} onClick={scrollTop}>&lt; Prev</PageLink>
            <Ellipsis>. . .</Ellipsis>
            <PageLink to={pagePrev} onClick={scrollTop}>{pagePrev}</PageLink>
          </>
        }
        <PageCurrent>{page}</PageCurrent>
        {info?.next &&
          <>
            <PageLink to={pageNext} onClick={scrollTop}>{pageNext}</PageLink>
            <Ellipsis>. . .</Ellipsis>
            <PageLink to={pageNext} onClick={scrollTop}>Next &gt;</PageLink>
          </>
        }
      </Buttons>
    </>
  );
}

export default Persons;

const PersonsContainer = styled.div`
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
  text-align: center;
  color: yellowgreen;
  margin: 20px 10px 20px 10px;
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

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 50px 0;
`;

const PageLink = styled(Link)`
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  color: yellow;
  text-decoration: none;
  margin: 0 10px 0 10px;

  :hover {
    text-shadow: 0 0 8px, 0 0 8px, 0 0 8px;
  }
`;

const PageCurrent = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  text-shadow: 0 0 8px, 0 0 8px, 0 0 8px;
  color: yellowgreen;
  margin: 0;
`;

const Ellipsis = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  color: yellow;
  margin: 0;
`;
