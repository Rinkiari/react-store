import logo from '../assets/keyboard.png';
import shopping_cart from '../assets/shopping-cart.png';
import '../scss/components/header.scss';
import Search from './Search';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="h_container">
      <Link to="/">
        <div className="left_side">
          <img src={logo} alt="logo" className="logo" />
          <div className="header_text">
            <h1 className="title">REACT STORE</h1>
            <span className="subtitle">Лучшие клавиатуры в мире</span>
          </div>
        </div>
      </Link>
      <Search />
      <div className="right_side">
        <Link to="/cart">
          <button className="cart_batton">
            <span>$520</span>
            <img src={shopping_cart} alt="cart" className="cartt" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
