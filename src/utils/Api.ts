export const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters( number: string, name?: string, status?: string, gender?: string ) {
  let url = `${BASE_URL}/character?page=${number}`;

  if (name) {
    url += `&name=${name}`
  }

  if (status) {
    url += `&status=${status}`
  }

  if (gender) {
    url += `&gender=${gender}`
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Статуc ошибки: ${res.status}`);
  }

  const characters = await res.json();

  return characters;
}
