export const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters() {
  const res = await fetch(`${BASE_URL}/character`);

  if (!res.ok) {
    throw new Error(`Статут ошибки: ${res.status}`);
  }

  const characters = await res.json();

  return characters;
}