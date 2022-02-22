import { useRef, useState } from 'react';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
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
  const [numDogs, setNumDogs] = useState<number>(1);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  const handleAmountAdded = () => {
    dispatch(amountAdded(10));
  };

  const handleNumDogsChange = (event: any) => {
    setNumDogs(event.target.value);
  };

  return (
    <>
      <Typography sx={{ textAlign: 'center', padding: '1rem' }} variant='h4'>
        Redux playground
      </Typography>
      <Box className={classes.reduxPlayground}>
        {/* -- COUNTER -- */}
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

        {/*-- RTK QUERY -- */}
        <Box>
          <Typography
            sx={{ textAlign: 'center', padding: '1rem' }}
            variant='h4'
          >
            RTK Query{' '}
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={numDogs}
              label='dogs'
              onChange={handleNumDogsChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </Typography>
          <Box className={classes.reduxPlayground__right}>
            {!isFetching
              ? data.map((dog) => (
                  <img
                    className={classes.image}
                    key={dog.id}
                    src={dog.image.url}
                    alt={dog.name}
                  />
                ))
              : 'Loading...'}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ReduxPlayground;
