import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { dogsApi } from '../features/dogs/dogsApiSlice';

export const store = configureStore({
  reducer: {
    [dogsApi.reducerPath]: dogsApi.reducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
