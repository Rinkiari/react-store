import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notesArr: [],
};

export const todoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notesArr.push(action.payload); // usaem action.payload для передачи новой заметки
    },
    delNote: (state, action) => {
      state.notesArr = state.notesArr.filter((_, index) => index !== action.payload); // del по индексу
    },
  },
});

export const { addNote, delNote } = todoSlice.actions;

export default todoSlice.reducer;
