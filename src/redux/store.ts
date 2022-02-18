import { configureStore } from '@reduxjs/toolkit';
import conterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: { counter: conterReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
