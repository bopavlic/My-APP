import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { NavbarProps } from './types';
import { useNavBarStyles } from './styled';

const NavBar: React.FC<NavbarProps> = (props) => {
  const { darkMode, setDarkMode } = props;

  const handleModeSwitch = () => {
    setDarkMode((state) => !state);
  };

  const classes = useNavBarStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <CatchingPokemonIcon className={classes.navBar__icon} />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Pokemon DEMO
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Switch aria-label='login switch' />}
              checked={darkMode}
              onChange={handleModeSwitch}
              label={darkMode ? <LightbulbIcon /> : <DarkModeIcon />}
            />
          </FormGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
