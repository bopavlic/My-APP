import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CounterState } from './types';

const initialState: CounterState = {
  value: 0,
};

//immer library handling immutable data
const counterSlice = createSlice({
  name: 'counter', //name is showing in redux dev tools
  initialState,
  reducers: {
    increase(state) {
      state.value++;
    },
    decrease(state) {
      state.value--;
    },
    //actions is object, payload field is number
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increase, decrease, amountAdded } = counterSlice.actions;
export default counterSlice.reducer;
