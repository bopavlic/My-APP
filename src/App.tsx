import './App.css';
import NavBar from './components/navBar/NavBar';
import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, theme } from './style/theme';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import { useAppSelector } from './redux/hooks';
import PokemonBgImg from './assets/images/pokemonBgImg.jpg';
import PokemonDetails from './components/pokemons/PokemonDetails';
import Footer from './components/footer/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { scrollToTop } from './helpers/scrollToTop';

const App = () => {
  const darkMode = useAppSelector((state) => state.darkMode);
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

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
            <Route path='/pokemon/:id' element={<PokemonDetails />} />
          </Routes>
        </Paper>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default App;
