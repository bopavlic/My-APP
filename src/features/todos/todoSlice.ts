import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './consts';

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      const newTodo = {
        id: Date.now(),
        description: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    deleteTodo(state, action: PayloadAction<number>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
