import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';
import '../scss/components/sort.scss';

const list = [
  { name: 'популярности (DESC)', sortProperty: '-rating' },
  { name: 'популярности (ASC)', sortProperty: 'rating' },
  { name: 'цене (DESC)', sortProperty: '-price' },
  { name: 'цене (ASC)', sortProperty: 'price' },
  { name: 'алфавиту(DESC)', sortProperty: '-title' },
  { name: 'алфавиту(ASC)', sortProperty: 'title' },
];

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [isVisible, setVisibility] = React.useState(false);

  const onClickListItem = (obj) => {
    dispatch(setSort(obj));
    setVisibility(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировать по:</b>
        <span onClick={() => setVisibility(!isVisible)}>{sort.name}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(obj)}
                className={sort.sortProperty === obj.sortProperty ? 'active' : ''}>
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
