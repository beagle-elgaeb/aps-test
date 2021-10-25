import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components/macro";
import * as api from "../utils/Api";
import { CharacterData, Info } from "../utils/types"

function Persons() {
  const [persons, setPersons] = useState<CharacterData[]>([]);
  const [info, setInfo] = useState<Info>();
  const [page, setPage] = useState<string>("1");
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancel = false;

    async function loadCharacters() {
      try {
        const characters = await api.getCharacters(page, name, status, gender);

        if (!characters || cancel) {
          return;
        }

        setPersons(characters.results);
        setInfo(characters.info);
        setError(false);
      } catch (err) {
        setError(true);
        console.log(err);
      }
    }

    loadCharacters();

    return () => { cancel = true }
  }, [page, name, status, gender]);

  function handleNextPage() {
    setPage(String(Number(page) + 1));
    window.scrollTo(0, 0);
  }

  function handlePrevPage() {
    setPage(String(Number(page) - 1));
    window.scrollTo(0, 0);
  }

  function handleName(evt: ChangeEvent<HTMLInputElement>) {
    setPage("1");
    setName(evt.target.value);
  }

  function handleStatus(evt: ChangeEvent<HTMLSelectElement>) {
    setPage("1");
    setStatus(evt.target.value);
  }

  function handleGender(evt: ChangeEvent<HTMLSelectElement>) {
    setPage("1");
    setGender(evt.target.value);
  }

  return (
    <>
      <SearchInputs>
        <NameInput placeholder="Name" type="text" name="Name" onChange={handleName} error={error} />
        <SearchSelect onChange={handleStatus}>
          <option value="">Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="Unknown">Unknown</option>
        </SearchSelect>
        <SearchSelect onChange={handleGender}>
          <option value="">Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="Unknown">Unknown</option>
        </SearchSelect>
      </SearchInputs>
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
            <PageButton type="button" onClick={handlePrevPage}>&lt; Prev</PageButton>
            <Ellipsis>. . .</Ellipsis>
            <PageButton type="button" onClick={handlePrevPage}>{Number(page) - 1}</PageButton>
          </>
        }
        <PageCurrent>{page}</PageCurrent>
        {info?.next &&
          <>
            <PageButton type="button" onClick={handleNextPage}>{Number(page) + 1}</PageButton>
            <Ellipsis>. . .</Ellipsis>
            <PageButton type="button" onClick={handleNextPage}>Next &gt;</PageButton>
          </>
        }
      </Buttons>
    </>
  );
}

export default Persons;

const SearchInputs = styled.div`
  display: flex;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

const NameInput = styled.input<{ error?: boolean }>`
  width: 200px;
  height: 26px;
  box-sizing: border-box;
  background: black;
  border: 1px solid ${({ error }) => (error ? "orange" : "yellowgreen")};
  border-radius: 99em;
  font-size: 14px;
  line-height: 16px;
  color: yellow;
  padding: 0 20px 0 20px;

  :active, :focus {
    border: 1px solid ${({ error }) => (error ? "orange" : "yellow")};
    outline: none;
    box-shadow: 0 0 10px 1px ${({ error }) => (error ? "orange" : "yellow")};
  }

  ::placeholder {
    font-size: 14px;
    line-height: 16px;
    color: yellowgreen;
  }
`;

const SearchSelect = styled.select`
  width: 200px;
  height: 26px;
  box-sizing: border-box;
  background: black;
  border: 1px solid yellowgreen;
  border-radius: 99em;
  font-size: 14px;
  line-height: 16px;
  color: yellow;
  margin: 0 0 0 20px;
  padding: 0 20px 0 20px;

  @media (max-width: 850px) {
    margin: 15px 0 0 0;
  }

  :active, :focus {
    border: 1px solid yellow;
    outline: none;
    box-shadow: 0 0 10px 1px yellow;
  }
`;

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
    margin: 50px 50px 19px 50px;
  }
`;

const Person = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 0, 0.15);
  border-radius: 20px;
  box-shadow: 0 0 5px 2px yellowgreen;
  padding: 0 0 10px 0;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  margin: 0 0 10px 0;
`;

const Name = styled.p`
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  color: yellowgreen;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px 10px 20px 10px;
`;

const Text = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: yellowgreen;
  margin: 0 10px 10px 10px;
  
  :last-child {
      margin: 0 10px 20px 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0 50px 0;
`;

const PageButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 18px;
  font-weight: 400;
  color: yellow;
  margin: 0 10px 0 10px;
  padding: 0;

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
