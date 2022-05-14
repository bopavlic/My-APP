import {
  transformToPokemon,
  transformToPokemonDetails,
} from './transformations';

export const fetchPokemons = async (page: number): Promise<any> => {
  const response = await fetch(
    `${process.env.REACT_APP_POKEMON_API_BASE_URL}/pokemon?offset=${page}&limit=20`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  return transformToPokemon(data);
};

export const fetchPokemonDetails = async (id: number): Promise<any> => {
  const response = await fetch(
    `${process.env.REACT_APP_POKEMON_API_BASE_URL}/pokemon/${id}/`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data = await response.json();
  console.log(data);
  return transformToPokemonDetails(data);
};
