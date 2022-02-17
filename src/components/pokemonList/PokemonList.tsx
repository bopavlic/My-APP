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
import { usePokemonListStyles } from './styled';
import { capitalizeFirstLetter } from '../../services/helpers/capitalizeFirstLetter';

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const classes = usePokemonListStyles();

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
    const splitted = url.split('/');
    const id = splitted[splitted.length - 2];
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
    <Box className={classes.pokemonList}>
      <Box className={classes.pokemonList__inner}>
        {!isLoading ? (
          pokemonList?.map((pokemon: Pokemon, index: number) => (
            <Paper key={index} className={classes.paper}>
              <Typography variant='h5'>
                {capitalizeFirstLetter(pokemon.name)}
              </Typography>
              <Typography variant='h6'>
                id: {handlePokemonId(pokemon.url)}
              </Typography>
            </Paper>
          ))
        ) : (
          //center the progress spinner
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
        <Pagination
          onChange={handlePageChange}
          page={pageNumber}
          count={56}
          size='large'
        />
      </Box>
    </Box>
  );
};

export default PokemonList;
