export interface PokemonData {
  count: number;
  next: string | null;
  previous: string | null;
  pokemons: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}
export interface PokemonDetails {
  image_url: string;
  name: string;
  weight: string;
  height: string;
  favorite_attack: string;
}
