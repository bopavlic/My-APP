import { Button, Paper, Typography } from '@mui/material';
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter';
import { useAppSelector } from '../../redux/hooks';
import { PokemonCardProps } from './types';
import PikachusImg from '../../assets/images/pikachu.png';
import { Link } from 'react-router-dom';

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  const { name, id } = props;
  const darkMode = useAppSelector((state) => state.darkMode);
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '19rem',
        height: '19rem',
      }}
      elevation={darkMode ? 16 : 4}
    >
      <Typography sx={{ marginBottom: '2rem' }} variant='h5'>
        {capitalizeFirstLetter(name)}
      </Typography>
      <Link style={{ textDecoration: 'none' }} to={`pokemon/${id}`}>
        <Button
          sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}
          variant='contained'
        >
          Details
        </Button>
      </Link>
      <img
        src={PikachusImg}
        style={{ position: 'relative', top: '70px', height: '59px' }}
        alt='pikachu'
      />
    </Paper>
  );
};

export default PokemonCard;
