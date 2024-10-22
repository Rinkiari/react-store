import React from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categoriesArr = ['Все', 'Новые', 'Популярные', 'Старые'];

  const onSort = (int) => {
    setActiveIndex(int);
  };

  return (
    <div style={styles.container}>
      {categoriesArr.map((el, i) => (
        <button
          style={styles.button}
          className={activeIndex === i ? 'active' : ''}
          onClick={() => onSort(i)}
          key={i}>
          {el}
        </button>
      ))}
    </div>
  );
};

// Пример использования CSS через JS-объект для стилизации
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
};

export default Categories;
