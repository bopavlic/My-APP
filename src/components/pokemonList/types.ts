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
