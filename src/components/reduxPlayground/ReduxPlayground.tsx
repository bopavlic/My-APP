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
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  increase,
  decrease,
  amountAdded,
} from '../../features/counter/counterSlice';
import { useFetchBreedsQuery } from '../../features/dogs/dogsApiSlice';
import { addTodo, deleteTodo } from '../../features/todos/todoSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import PrimaryTitle from '../../ui/PrimaryTitle';

const ReduxPlayground: React.FC = () => {
  const [numDogs, setNumDogs] = useState<number>(1);
  const [value, setValue] = useState<string>('');

  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.darkMode);
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
    <Paper sx={{ maxWidth: '1440px', margin: '0 auto' }}>
      <PrimaryTitle>Redux playground</PrimaryTitle>
      <Box
        sx={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem',

          '@media(max-width: 800px)': {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            margin: '1rem',
          }}
        >
          {/* -- COUNTER -- */}
          <Box>
            <Button
              sx={{
                height: '50px',
                margin: '0.54rem !important',
              }}
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
              sx={{
                height: '50px',
                margin: '0.54rem !important',
              }}
              variant='contained'
              onClick={handleIncrease}
            >
              <Typography variant='h5'>+</Typography>
            </Button>
            <Button
              sx={{
                height: '50px',
                margin: '0.54rem !important',
              }}
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
            <Box
              sx={{
                marginTop: '1rem',
                height: '280px',
                overflow: 'auto',
              }}
            >
              {todo.map(({ description, id }, index) => (
                <Paper
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                    padding: '2rem',
                    height: '4rem',
                    fontSize: '20px',
                  }}
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {!isFetching
              ? data.map((dog) => (
                  <img
                    style={{
                      height: '300px',
                      width: '400px',
                      objectFit: 'cover',
                    }}
                    key={dog.id}
                    src={dog.image.url}
                    alt={dog.name}
                    loading='lazy'
                  />
                ))
              : 'Loading...'}
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ReduxPlayground;
