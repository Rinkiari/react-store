import React from 'react';
import '../scss/components/sort.scss';

const Sort = () => {
  const [isVisible, setVisibility] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const list = ['популярности', 'цене', 'алфавиту'];
  const sortName = list[selected];

  const onClickListItem = (i) => {
    setSelected(i);
    setVisibility(false);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <b>Сортировать по:</b>
        <span onClick={() => setVisibility(!isVisible)}>{sortName}</span>
      </div>
      {isVisible && (
        <div className="sort__popup">
          <ul>
            {list.map((name, i) => (
              <li
                key={i}
                onClick={() => onClickListItem(i)}
                className={selected === i ? 'active' : ''}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
