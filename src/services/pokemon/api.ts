import { transformToPokemon } from './transformations';

export const fetchPokemons = async (page: number): Promise<any> => {
  const response = await fetch(
    `${process.env.REACT_APP_POKEMON_API_BASE_URL}/pokemon?offset=${page}&limit=10`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  return transformToPokemon(data);
};
