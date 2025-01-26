import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/filterSlice';

export const store = configureStore({
  reducer: { todo_list: todoReducer },
});
