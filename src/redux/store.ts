import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import kboard from './slices/kboardSlice';

export const store = configureStore({
  reducer: { filter, cart, kboard },
});

export type RootState = ReturnType<typeof store.getState>;
