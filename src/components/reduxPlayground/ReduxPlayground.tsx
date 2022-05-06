import { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useReduxPlaygroundStyles } from './styled';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  increase,
  decrease,
  amountAdded,
} from '../../features/counter/counterSlice';
import { useFetchBreedsQuery } from '../../features/dogs/dogsApiSlice';
import { addTodo, deleteTodo } from '../../features/todos/todoSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReduxPlaygroundProps } from './types';

const ReduxPlayground: React.FC<ReduxPlaygroundProps> = (props) => {
  const { darkMode } = props;
  const classes = useReduxPlaygroundStyles();
  const [numDogs, setNumDogs] = useState<number>(1);
  const [value, setValue] = useState<string>('');

  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  const todo = useAppSelector((state) => state.todo);

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

  const addTodoHandler = (e: any) => {
    if (!value) {
      return;
    }
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Typography sx={{ textAlign: 'center', padding: '1rem' }} variant='h4'>
        Redux playground
      </Typography>
      <Box className={classes.reduxPlayground}>
        <Box className={classes.reduxPlayground__left}>
          {/* -- COUNTER -- */}
          <Box>
            <Button
              className={classes.reduxPlayground__button}
              variant='contained'
              onClick={handleDecrease}
            >
              <Typography variant='h5'>-</Typography>
            </Button>
            <Button
              sx={{ height: '50px', pointer: 'none' }}
              variant='contained'
            >
              <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                {counter}
              </Typography>
            </Button>
            <Button
              className={classes.reduxPlayground__button}
              variant='contained'
              onClick={handleIncrease}
            >
              <Typography variant='h5'>+</Typography>
            </Button>
            <Button
              className={classes.reduxPlayground__button}
              variant='contained'
              onClick={handleAmountAdded}
            >
              <Typography variant='h6'>+ 10</Typography>
            </Button>
          </Box>

          {/* -- TODOS -- */}
          <Box>
            <TextField
              onChange={(e) => setValue(e.target.value)}
              value={value}
              id='outlined-basic'
              label='Todo text'
              variant='outlined'
              required
            />
            <Button
              sx={{ height: '55px', marginLeft: '0.2rem' }}
              variant='contained'
              onClick={addTodoHandler}
            >
              Add Todo
            </Button>
            <Box className={classes.reduxPlayground__todos}>
              {todo.map(({ description, id }, index) => (
                <Paper
                  className={classes.reduxPlayground__todo}
                  key={index}
                  elevation={darkMode ? 16 : 4}
                >
                  {description}
                  <DeleteIcon
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleDeleteTodo(id)}
                  />
                </Paper>
              ))}
            </Box>
          </Box>
        </Box>

        {/*-- RTK QUERY -- */}
        <Box>
          <Typography
            sx={{ textAlign: 'center', padding: '1rem' }}
            variant='h4'
          >
            RTK Query
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={numDogs}
              label='dogs'
              onChange={handleNumDogsChange}
              sx={{ marginLeft: '1rem' }}
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
