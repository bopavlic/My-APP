import { useState } from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import { createTheme } from '@mui/material';
import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './style/theme';

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const theme = createTheme({
    palette: {},
  });

  return (
    <div className='app'>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Paper>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;
