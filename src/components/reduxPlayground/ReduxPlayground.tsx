import { Box, Button, Typography } from '@mui/material';
import { useReduxPlaygroundStyles } from './styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  increase,
  decrease,
  amountAdded,
} from '../../features/counter/counterSlice';

const ReduxPlayground = () => {
  const classes = useReduxPlaygroundStyles();
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleDecrease = () => {
    dispatch(decrease());
  };

  const handleAmountAdded = () => {
    dispatch(amountAdded(10));
  };

  return (
    <>
      <Typography sx={{ textAlign: 'center', padding: '1rem' }} variant='h4'>
        Redux playground
      </Typography>
      <Box className={classes.reduxPlayground}>
        <Box className={classes.reduxPlayground__left}>
          <Button variant='contained' onClick={handleDecrease}>
            <Typography variant='h5'>-</Typography>
          </Button>
          <Button variant='contained'>
            <Typography variant='h6'>{counter}</Typography>
          </Button>
          <Button variant='contained' onClick={handleIncrease}>
            <Typography variant='h5'>+</Typography>
          </Button>
          <Button variant='contained' onClick={handleAmountAdded}>
            <Typography variant='h6'>+ 10</Typography>
          </Button>
        </Box>
        <Box className={classes.reduxPlayground__right}>right</Box>
      </Box>
    </>
  );
};

export default ReduxPlayground;
