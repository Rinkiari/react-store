import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

type Kboard = {
  id: number;
  imageUrl: string;
  title: string;
  switches: string[];
  price: number;
};

type FetchKboardsArgs = {
  search: string;
  categoryId: number;
  sortP: string;
  currentPage: number;
};

type ReturnedData = {
  meta: {
    total_items: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    remaining_count: number;
  };
  items: Kboard[];
};

export const fetchKboards = createAsyncThunk<ReturnedData, FetchKboardsArgs>(
  'kboard/fetchKboardsStatus',
  async (params) => {
    const { search, categoryId, sortP, currentPage } = params;
    const { data } = await axios.get<ReturnedData>(
      `https://c09345baae5f2e48.mokky.dev/items?page=${currentPage}&limit=8&${
        categoryId > 0 ? `size=${categoryId}` : ''
      }&sortBy=${sortP}${search}`,
    );
    return data;
  },
);

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface KboardSliceState {
  items: Kboard[];
  totalPages: number;
  status: Status;
}

export const initialState: KboardSliceState = {
  items: [],
  totalPages: 1,
  status: Status.LOADING, // loading | success | error
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
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchKboards.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalPages = action.payload.meta.total_pages;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchKboards.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const { setItems } = kboardSlice.actions;

export const selectKboardData = (state: RootState) => state.kboard;

export default kboardSlice.reducer;
