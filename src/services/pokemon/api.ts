import { Pokemon } from '../../components/pokemonList/types';

export const fetchPokemons = async (page: number): Promise<Pokemon> => {
  const response = await fetch(
    `${process.env.REACT_APP_POKEMON_API_BASE_URL}/pokemon?offset=${page}&limit=20`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
};
