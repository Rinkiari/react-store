import React from 'react';
import '../scss/components/categories.scss';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categoriesArr = ['Все', 'Новые', 'Популярные', 'Старые'];

  const onSort = (int) => {
    setActiveIndex(int);
  };

  return (
    <div className="container">
      {categoriesArr.map((el, i) => (
        <button
          className={`button ${activeIndex === i ? 'active' : ''}`}
          onClick={() => onSort(i)}
          key={i}>
          {el}
        </button>
      ))}
    </div>
  );
};

export default Categories;
