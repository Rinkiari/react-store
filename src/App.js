import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, delNote } from './redux/slices/filterSlice';
import './scss/app.scss';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom';

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue, 'INPUT CHANGED');

  const notesArr = useSelector((state) => state.todo_list.notesArr);
  const dispatch = useDispatch();
  const [noteInput, setNoteInput] = React.useState('');

  const handleAddNote = () => {
    if (noteInput.trim()) {
      dispatch(addNote(noteInput)); // send текст заметки в action.payload
      setNoteInput(''); // clear поле ввода
    }
  };

  const handleDeleteNote = (index) => {
    dispatch(delNote(index)); // send индекс заметки, которую хотим удалить
  };

  return (
    <div className="app-container">
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Enter a note"
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
      <ul>
        {notesArr.map((note, index) => (
          <li key={index}>
            {note}
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {/* <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </SearchContext.Provider> */}
    </div>
  );
}
export default App;
