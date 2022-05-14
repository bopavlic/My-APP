import { PokemonData } from '../../components/pokemons/types';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';

export const transformToPokemon = (response: any): PokemonData => {
  return {
    next: response.next,
    previous: response.previous,
    count: response.count,
    pokemons: response.results,
  };
};

export const transformToPokemonDetails = (response) => {
  //destructuring
  const [moves] = response.moves;
  const { move } = moves;

  return {
    image_url: response.sprites.front_default,
    name: capitalizeFirstLetter(response.name),
    weight: response.weight,
    height: response.height,
    favorite_attack: move.name,
  };
};
