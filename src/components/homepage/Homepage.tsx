import { Box } from '@mui/material';
import React from 'react';
import PokemonList from '../pokemons/PokemonList';
import ReduxPlayground from '../reduxPlayground/ReduxPlayground';

const Homepage: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <PokemonList />
      <ReduxPlayground />
    </Box>
  );
};

export default Homepage;
