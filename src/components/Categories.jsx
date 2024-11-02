import React from 'react';
import '../scss/components/categories.scss';

const Categories = ({ value, onClickCategory }) => {
  const categoriesArr = ['Все', '100% размер', '80-75% размер', '65% размер'];

  return (
    <div className="container">
      {categoriesArr.map((categoryName, i) => (
        <button
          className={`buttonn ${value === i ? 'active' : ''}`}
          onClick={() => onClickCategory(i)}
          key={i}>
          {categoryName}
        </button>
      ))}
    </div>
  );
};

export default Categories;
