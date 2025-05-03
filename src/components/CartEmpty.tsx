import React from 'react';
import { Link } from 'react-router-dom';

import cartEmptySvg from '../assets/empty-cart.svg';

const CartEmpty = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <span>😕</span>
        </h2>
        <p>
          Вероятней всего, вы ещё не заказывали клавиатуру.
          <br />
          Для того, чтобы заказать клавиатуру, перейди на главную страницу.
        </p>
        <img src={cartEmptySvg} alt="empty" />
        <Link to="/" className="button button--black">
          <span>Вернуться назад</span>
        </Link>
      </div>
    </>
  );
};

export default CartEmpty;
