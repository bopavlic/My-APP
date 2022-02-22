import { Box, Button, Typography } from '@mui/material';
import { useReduxPlaygroundStyles } from './styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  increase,
  decrease,
  amountAdded,
} from '../../features/counter/counterSlice';
import { useFetchBreedsQuery } from '../../features/dogs/dogsApiSlice';

const ReduxPlayground = () => {
  const classes = useReduxPlaygroundStyles();
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { data = [], isFetching } = useFetchBreedsQuery();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  const handleAmountAdded = () => {
    dispatch(amountAdded(10));
  };

  console.log(data);

  return (
    <>
      <Typography sx={{ textAlign: 'center', padding: '1rem' }} variant='h4'>
        Redux playground
      </Typography>
      <Box className={classes.reduxPlayground}>
        <Box className={classes.reduxPlayground__left}>
          <Button
            sx={{ height: '50px' }}
            variant='contained'
            onClick={handleDecrease}
          >
            <Typography variant='h5'>-</Typography>
          </Button>
          <Button sx={{ height: '50px' }} variant='contained'>
            <Typography variant='h6'>{counter}</Typography>
          </Button>
          <Button
            sx={{ height: '50px' }}
            variant='contained'
            onClick={handleIncrease}
          >
            <Typography variant='h5'>+</Typography>
          </Button>
          <Button
            sx={{ height: '50px' }}
            variant='contained'
            onClick={handleAmountAdded}
          >
            <Typography variant='h6'>+ 10</Typography>
          </Button>
        </Box>
        <Box>
          <Typography
            sx={{ textAlign: 'center', padding: '1rem' }}
            variant='h4'
          >
            RTK Query
          </Typography>
          <Box className={classes.reduxPlayground__right}>
            {data.map((dog) => (
              <img
                key={dog.id}
                src={dog.image.url}
                alt={dog.name}
                height={250}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ReduxPlayground;
