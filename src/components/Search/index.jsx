import React from 'react';
import { SearchContext } from '../../App';

import styles from './Search.module.scss';

export const Search = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        fill="none"
        height="48"
        viewBox="0 0 48 48"
        width="48"
        xmlns="http://www.w3.org/2000/svg">
        <rect fill="white" fillOpacity="0.01" height="48" width="48" />
        <path
          d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"
          fill="#2F88FF"
          stroke="black"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          d="M26.6568 14.3431C25.2091 12.8954 23.2091 12 21 12C18.7909 12 16.7909 12.8954 15.3431 14.3431"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        <path
          d="M33.2218 33.2218L41.7071 41.7071"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск клавиатуры ..."
      />
      {searchValue && (
        <svg
          onClick={() => setSearchValue('')}
          className={styles.crossIcon}
          height="6.82666in"
          viewBox="0 0 6.82666 6.82666"
          width="6.82666in"
          xmlns="http://www.w3.org/2000/svg">
          <path
            className="fil0"
            d="M5.91083 1.2175c0.0833031,-0.0833031 0.0833031,-0.218366 0,-0.301669 -0.0833031,-0.0833031 -0.218366,-0.0833031 -0.301669,0l-4.69334 4.69333c-0.0833031,0.0833031 -0.0833031,0.218366 0,0.301669 0.0833031,0.0833031 0.218366,0.0833031 0.301669,0l4.69334 -4.69333z"
          />
          <path
            className="fil0"
            d="M1.2175 0.915827c-0.0833031,-0.0833031 -0.218366,-0.0833031 -0.301669,0 -0.0833031,0.0833031 -0.0833031,0.218366 0,0.301669l4.69334 4.69333c0.0833031,0.0833031 0.218366,0.0833031 0.301669,0 0.0833031,-0.0833031 0.0833031,-0.218366 0,-0.301669l-4.69334 -4.69333z"
          />
        </svg>
      )}
    </div>
  );
};

export default Search;
