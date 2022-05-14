import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { dogsApi } from '../features/dogs/dogsApiSlice';
import todoReducer from '../features/todos/todoSlice';
import darkModeReducer from '../features/darkMode/darkModeSlice';

export const store = configureStore({
  reducer: {
    [dogsApi.reducerPath]: dogsApi.reducer,
    counter: counterReducer,
    todo: todoReducer,
    darkMode: darkModeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsApi.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
