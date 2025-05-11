import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import kboard from './slices/kboardSlice';

export const store = configureStore({
  reducer: { filter, cart, kboard },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
