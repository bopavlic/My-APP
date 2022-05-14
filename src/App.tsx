import './App.css';
import NavBar from './components/navBar/NavBar';
import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, theme } from './style/theme';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import { useAppSelector } from './redux/hooks';
import PokemonBgImg from './assets/images/pokemonBgImg.png';

const App = () => {
  const darkMode = useAppSelector((state) => state.darkMode);

  return (
    <div className='app'>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <NavBar />
        <Paper
          sx={{
            borderRadius: 0,
            backgroundImage: `url(${PokemonBgImg})`,
            backgroundRepeat: 'repeat',
          }}
        >
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;
