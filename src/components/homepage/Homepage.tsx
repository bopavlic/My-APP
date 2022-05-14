import { Box } from '@mui/material';
import React from 'react';
import Footer from '../footer/Footer';
import PokemonList from '../pokemons/PokemonList';
import ReduxPlayground from '../reduxPlayground/ReduxPlayground';

const Homepage: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <PokemonList />
      <ReduxPlayground />
      <Footer />
    </Box>
  );
};

export default Homepage;
