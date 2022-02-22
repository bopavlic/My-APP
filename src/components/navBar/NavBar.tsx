import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { FormControlLabel, FormGroup, Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { NavBarProps } from './types';
import { useNavBarStyles } from './styled';

const NavBar: React.FC<NavBarProps> = (props) => {
  const { darkMode, setDarkMode } = props;
  const classes = useNavBarStyles();

  const handleModeSwitch = () => {
    setDarkMode((state) => !state);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          <IconButton
            onClick={scrollToTop}
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <CatchingPokemonIcon className={classes.navBar__icon} />
          </IconButton>
          <Typography
            onClick={scrollToTop}
            variant='h5'
            sx={{ flexGrow: 1, cursor: 'pointer' }}
          >
            POKEMON
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Switch />}
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
