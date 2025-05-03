import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSort } from '../redux/slices/filterSlice';
import '../scss/components/sort.scss';

type ListItem = {
  name: string;
  sortProperty: string;
};

export const list: ListItem[] = [
  { name: 'популярности (DESC)', sortProperty: '-rating' },
  { name: 'популярности (ASC)', sortProperty: 'rating' },
  { name: 'цене (DESC)', sortProperty: '-price' },
  { name: 'цене (ASC)', sortProperty: 'price' },
  { name: 'алфавиту(DESC)', sortProperty: '-title' },
  { name: 'алфавиту(ASC)', sortProperty: 'title' },
];

const Sort = () => {
  const dispatch = useDispatch();
  const sort = useSelector((state: any) => state.filter.sort);
  const sortRef = React.useRef(null);

  const [isVisible, setVisibility] = React.useState(false);

  const onClickListItem = (obj: ListItem) => {
    dispatch(setSort(obj));
    setVisibility(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      const path = event.composedPath();

      if (!path.includes(sortRef.current)) {
        setVisibility(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
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
