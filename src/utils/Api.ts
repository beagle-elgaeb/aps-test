export const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(number: string) {
  const res = await fetch(`${BASE_URL}/character?page=${number}`);

  if (!res.ok) {
    throw new Error(`Статут ошибки: ${res.status}`);
  }

  const characters = await res.json();

  return characters;
}