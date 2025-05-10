import React from 'react';
import styles from './KboardCard.module.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, CartItem, selectCartItemById } from '../../redux/slices/cartSlice';

type KboardProps = {
  id: number;
  imageUrl: string;
  title: string;
  switches: string[];
  price: number;
};

function Kboard({ id, imageUrl, title, switches, price }: KboardProps) {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemById(id));

  const [activeSwitch, setActiveSwitch] = React.useState(switches[0]);

  const addedCount = cartItem ? cartItem.count : 0;

  const handleSwitchClick = (switchType: string) => {
    setActiveSwitch(switchType);
  };

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      title,
      price,
      imageUrl,
      switches: activeSwitch,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <Link to={`/kboard/${id}`}>
          <img src={imageUrl} alt={title} className={styles.image} />
        </Link>
        <div className={styles.content}>
          <Link to={`/kboard/${id}`}>
            <h2 className={styles.title}>{title}</h2>
          </Link>
          <div className={styles.switchesPanel}>
            {switches.map((switchType, index) => (
              <span
                key={index}
                onClick={() => handleSwitchClick(switchType)}
                className={
                  activeSwitch === switchType
                    ? `${styles.switch} ${styles.switchActive}`
                    : styles.switch
                }>
                {switchType}
              </span>
            ))}
          </div>
          <p className={styles.price}>${price}</p>
          <button onClick={onClickAdd} className={styles.button}>
            Добавить в корзину
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Kboard;
