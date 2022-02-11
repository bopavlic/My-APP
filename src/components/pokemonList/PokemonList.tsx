import { Box, CircularProgress, Pagination, Paper } from '@mui/material';
import { useState, useEffect } from 'react';
import { fetchPokemons } from '../../services/pokemon/api';
import { Pokemon } from './types';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = async (event: React.ChangeEvent<any>, value: number) => {
    event.preventDefault();
    if (value === 1) {
      setPageNumber(0);
    } else {
      setPageNumber(value);
    }
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await fetchPokemons(pageNumber * 10);
        setPokemonList(result.pokemons);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    })();
  }, [pageNumber]);

  return (
    <Box p={4}>
      {!isLoading ? (
        pokemonList?.map((pokemon: Pokemon, index: number) => (
          <Paper key={index}>name: {pokemon.name}</Paper>
        ))
      ) : (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
      <Pagination onChange={handleChange} page={pageNumber} count={56} />
    </Box>
  );
};

export default PokemonList;
