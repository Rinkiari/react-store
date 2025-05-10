import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const fetchKboards = createAsyncThunk(
  'kboard/fetchKboardsStatus',
  async (params, thunkAPI) => {
    const { search, categoryId, sort, currentPage } = params;
    console.log('STATE: ', thunkAPI.getState());
    const { data } = await axios.get(
      `https://c09345baae5f2e48.mokky.dev/items?page=${currentPage}&limit=8&${
        categoryId > 0 ? `size=${categoryId}` : ''
      }&sortBy=${sort.sortProperty}${search}`,
    );
    return data;
  },
);

type Kboard = {
  id: number;
  imageUrl: string;
  title: string;
  switches: string[];
  price: number;
};

interface KboardSliceState {
  items: Kboard[];
  totalPages: number;
  status: 'loading' | 'success' | 'error';
}

export const initialState: KboardSliceState = {
  items: [],
  totalPages: 1,
  status: 'loading', // loading | success | error
};

const kboardSlice = createSlice({
  name: 'kboard',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchKboards.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchKboards.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalPages = action.payload.meta.total_pages;
        state.status = 'success';
      })
      .addCase(fetchKboards.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setItems } = kboardSlice.actions;

export const selectKboardData = (state: RootState) => state.kboard;

export default kboardSlice.reducer;
