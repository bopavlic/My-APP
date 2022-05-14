import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { initialPokemonDetails } from './consts';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { fetchPokemonDetails } from '../../services/pokemon/api';
import { Box } from '@mui/system';

const PokemonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemonDetails, setPokemonDetails] = useState(initialPokemonDetails);
  const [isLoading, setIsLoading] = useState(false);

  //fetch details about single pokemon
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await fetchPokemonDetails(id);
        setPokemonDetails(result);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    })();
  }, [id]);

  return (
    <div className='pokemonDetails'>
      {!isLoading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 65px)',
          }}
        >
          <Card sx={{ maxWidth: 345, padding: '2rem' }}>
            <CardMedia
              component='img'
              alt='green iguana'
              height='140'
              image={pokemonDetails.image_url}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {pokemonDetails.name} :)
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {`Hello my Pokemon friend! My name is ${pokemonDetails.name}, nice to meet you.
               Let me in introduce myself. My favorite attack is ${pokemonDetails.favorite_attack},
               weight: ${pokemonDetails.weight} and height: ${pokemonDetails.height}.`}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                variant='outlined'
                size='small'
                onClick={() => navigate(-1)}
              >
                Go Back
              </Button>
            </CardActions>
          </Card>
        </Box>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default PokemonDetails;
