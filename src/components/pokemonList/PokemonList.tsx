import { useState, useEffect } from 'react';
import { fetchPokemons } from '../../services/pokemon/api';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<any>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchPokemons();
        setPokemonList(result);
      } catch (error) {
        console.log('error123: ', error);
      }
    })();
  }, []);
  console.log(pokemonList);

  return (
    <div style={{ padding: '2rem' }}>PokemonList: {pokemonList?.count}</div>
  );
};

export default PokemonList;
