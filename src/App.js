import React from 'react';
import './scss/app.scss';

import Kboard from './components/Kboard';
import Categories from './components/Categories';
import Sort from './components/Sort.jsx';
import MySort from './components/MySort.jsx';
import Search from './components/Search.jsx';

function App() {
  const url = 'https://c09345baae5f2e48.mokky.dev/items';
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => {
        setItems(jsonRes);
      });
  }, []);

  return (
    <>
      <h1>#1 Keyboard Store</h1>
      <Categories />
      <Sort />

      <div className="container">
        {items.map((obj) => (
          <Kboard key={obj.id} {...obj} />
        ))}
      </div>
      <Search />
    </>
  );
}

export default App;
