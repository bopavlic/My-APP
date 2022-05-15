import { useState, useEffect } from 'react';
import { fetchPokemons } from '../../services/pokemon/api';
import { Pokemon } from './types';
import { Box, CircularProgress, Pagination, Paper } from '@mui/material';
import PrimaryTitle from '../../ui/PrimaryTitle';
import { scrollToTop } from '../../helpers/scrollToTop';
import PokemonCard from '../../ui/pokemon/PokemonCard';

const PokemonList: React.FC = () => {
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
      scrollToTop();
      return;
    }
    setPageNumber(value);
    scrollToTop();
  };

  const handlePokemonId = (url: string) => {
    const splitted = url.split('/');
    const id = splitted[splitted.length - 2];
    return Number(id);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await fetchPokemons(pageNumber * 20); //20 pokemons per page
        setPokemonList(result.pokemons);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    })();
  }, [pageNumber]);

  return (
    <Box
      sx={{
        maxWidth: '1440px',
      }}
    >
      <PrimaryTitle>Pokemon list</PrimaryTitle>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        {!isLoading ? (
          pokemonList.map((pokemon: Pokemon, index: number) => (
            <PokemonCard
              key={index}
              name={pokemon.name}
              id={handlePokemonId(pokemon.url)}
            />
          ))
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <Paper sx={{ padding: '1rem', borderRadius: '1rem' }}>
          <Pagination
            sx={{ fontSize: '2rem' }}
            variant='outlined'
            onChange={handlePageChange}
            page={pageNumber}
            count={56}
            size='large'
          />
        </Paper>
      </Box>
    </Box>
  );
};

export default PokemonList;
