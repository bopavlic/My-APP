import { Pokemon } from '../../components/pokemonList/types';

export const fetchPokemons = async (): Promise<Pokemon> => {
  const response = await fetch(
    `${process.env.REACT_APP_POKEMON_API_BASE_URL}/pokemon`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  return response.json();
};
