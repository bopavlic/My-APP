import { makeStyles } from '@mui/styles';

export const usePokemonListStyles = makeStyles(
  {
    pokemonList: {
      maxWidth: '1440px',
      margin: '0 auto',
    },
    pokemonList__inner: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      margin: '0 auto',
      justifyContent: 'center',
    },
    paper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '19rem',
      height: '19rem',
    },
  },
  { index: 1 }
);
