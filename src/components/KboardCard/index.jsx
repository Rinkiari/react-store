import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, selectCartItemById } from '../../redux/slices/cartSlice';

function Kboard({ id, imageUrl, title, switches, price }) {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const [activeSwitch, setActiveSwitch] = React.useState(switches[0]);

  const addedCount = cartItem ? cartItem.count : 0;

  const handleSwitchClick = (switchType) => {
    setActiveSwitch(switchType);
  };

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      switches: activeSwitch,
    };
    dispatch(addItem(item));
  };

  return (
    <div style={styles.card_wrapper}>
      <div style={styles.card}>
        <Link to={`/kboard/${id}`}>
          <img src={imageUrl} alt={title} style={styles.image} />
        </Link>
        <div style={styles.content}>
          <Link to={`/kboard/${id}`}>
            <h2 style={styles.title}>{title}</h2>
          </Link>
          <div style={styles.switchesPanel}>
            {switches.map((switchType, index) => (
              <span
                key={index}
                onClick={() => handleSwitchClick(switchType)}
                style={{
                  ...styles.switch,
                  ...(activeSwitch === switchType && styles.switchActive),
                }}>
                {switchType}
              </span>
            ))}
          </div>
          <p style={styles.price}>${price}</p>
          <button onClick={onClickAdd} style={styles.button}>
            Добавить в корзину
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  card_wrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  content: {
    padding: '20px',
  },
  title: {
    fontSize: '20px',
    margin: '0 0 10px 0',
  },
  switchesPanel: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  switch: {
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    padding: '5px 10px',
    margin: '0 5px',
    fontSize: '14px',
    color: '#333',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  switchActive: {
    backgroundColor: '#8a2be2', // Фиолетовый цвет для активного свитча
    color: '#fff',
  },
  price: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '0 0 20px 0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Kboard;
