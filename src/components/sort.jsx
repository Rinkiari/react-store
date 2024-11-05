import React from 'react';
import '../scss/components/sort.scss';

const Sort = ({ value, onChangeSortType }) => {
  const [isVisible, setVisibility] = React.useState(false);
  const list = [
    { name: 'популярности (DESC)', sortProperty: '-rating' },
    { name: 'популярности (ASC)', sortProperty: 'rating' },
    { name: 'цене (DESC)', sortProperty: '-price' },
    { name: 'цене (ASC)', sortProperty: 'price' },
    { name: 'алфавиту(DESC)', sortProperty: '-title' },
    { name: 'алфавиту(ASC)', sortProperty: 'title' },
  ];

  const onClickListItem = (i) => {
    onChangeSortType(i);
    setVisibility(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировать по:</b>
        <span onClick={() => setVisibility(!isVisible)}>{value.name}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={value.sortProperty === obj.sortProperty ? 'active' : ''}>
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
