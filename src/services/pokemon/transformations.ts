import { PokemonData } from '../../components/pokemons/types';

export const transformToPokemon = (data: any): PokemonData => {
  return {
    next: data.next,
    previous: data.previous,
    count: data.count,
    pokemons: data.results,
  };
};
