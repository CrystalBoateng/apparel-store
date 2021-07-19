import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCart } from '../../features/cart/cartSlice';
import './Header.css';

export const Header = () => {
  const cart = useSelector(selectCart);
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
      <div id="cart-icon">
        <Link to="/cart">
          cart_icon_img
          {cart}
        </Link>
      </div>
    </header>
  );
}
