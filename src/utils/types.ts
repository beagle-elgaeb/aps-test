export type CharacterData = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: [],
  url: string,
  created: string
};

export type Info = {
  "count": number,
  "pages": number,
  "next": string | undefined,
  "prev": string | undefined
};