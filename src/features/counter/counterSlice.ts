import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from './types';

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter', //name is showing in redux dev tools
  initialState,
  reducers: {
    incremented(state) {
      state.value++; //immer library handling immutable data
    },

    //decrement

    //reset
  },
});

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;
