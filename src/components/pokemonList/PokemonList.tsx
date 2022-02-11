import { Pagination, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { fetchPokemons } from '../../services/pokemon/api';
import { Results } from './types';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<any>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchPokemons(pageNumber * 10);
        setPokemonList(result);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [pageNumber]);

  const handleChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    if (value === 1) {
      setPageNumber(0);
    } else {
      setPageNumber(value);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      PokemonList: {pokemonList?.count}
      <div>
        {pokemonList.results &&
          pokemonList.results.map((pokemon: Results, index: number) => (
            <Paper key={index}>name: {pokemon.name}</Paper>
          ))}
      </div>
      <Pagination onChange={handleChange} page={pageNumber} count={56} />
    </div>
  );
};

export default PokemonList;
