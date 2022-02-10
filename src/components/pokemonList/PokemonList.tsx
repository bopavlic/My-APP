import { Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { fetchPokemons } from '../../services/pokemon/api';
import { Results } from './types';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchPokemons();
        setPokemonList(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  console.log(pokemonList);

  return (
    <div style={{ padding: '2rem' }}>
      PokemonList: {pokemonList?.count}
      <div>
        {pokemonList.results &&
          pokemonList.results.map((pokemon: Results, index: number) => (
            <Paper key={index}>name: {pokemon.name}</Paper>
          ))}
      </div>
    </div>
  );
};

export default PokemonList;
