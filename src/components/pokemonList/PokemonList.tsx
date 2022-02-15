import { useState, useEffect } from 'react';
import { fetchPokemons } from '../../services/pokemon/api';
import { Pokemon } from './types';
import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Typography,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handlePageChange = async (
    event: React.ChangeEvent<any>,
    value: number
  ) => {
    event.preventDefault();
    //page 1 is default one that loads
    if (value === 1) {
      setPageNumber(0);
    } else {
      setPageNumber(value);
    }
  };

  const handlePokemonId = (url: string) => {
    // const lastPart = url.slice(-6, -1);
    // const onlyNumbers = lastPart.replace(/\D[^.]/g, '');
    const splitted = url.split('/');
    const id = splitted[6];
    return id;
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await fetchPokemons(pageNumber * 20); //20 per page
        setPokemonList(result.pokemons);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    })();
  }, [pageNumber]);

  return (
    <Box p={4}>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {!isLoading ? (
          pokemonList?.map((pokemon: Pokemon, index: number) => (
            <Box p={1} key={index}>
              <Paper sx={{ width: '280px', height: '280px' }}>
                <Typography variant='h6'>name: {pokemon.name}</Typography>
                <Typography variant='h6'>
                  id: {handlePokemonId(pokemon.url)}
                </Typography>
                <InfoIcon onClick={() => handlePokemonId(pokemon.url)} />
              </Paper>
            </Box>
          ))
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          onChange={handlePageChange}
          page={pageNumber}
          count={55}
          size='large'
        />
      </Box>
    </Box>
  );
};

export default PokemonList;
