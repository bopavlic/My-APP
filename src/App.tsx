import { useState } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, theme } from './style/theme';
import PokemonList from './components/pokemonList/PokemonList';
import ReduxPlayground from './components/reduxPlayground/ReduxPlayground';

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className='app'>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Paper sx={{ borderRadius: 0 }}>
          <PokemonList darkMode={darkMode} />
          <ReduxPlayground darkMode={darkMode} />
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;
