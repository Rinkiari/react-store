import logo from '../assets/keyboard.png';
import shopping_cart from '../assets/shopping-cart.png';
import '../scss/components/header.scss';

const Header = () => {
  return (
    <div className="h_container">
      <div className="left_side">
        <img src={logo} alt="logo" className="logo" />
        <div className="header_text">
          <h1 className="title">REACT STORE</h1>
          <span className="subtitle">Лучшие клавиатуры в мире</span>
        </div>
      </div>
      <div className="right_side">
        <button className="cart_button">
          <span>$520</span>
          <img src={shopping_cart} alt="cart" className="cart" />
        </button>
      </div>
    </div>
  );
};

export default Header;
