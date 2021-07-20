import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTotalItems } from '../../features/cart/cartSlice';
import './Header.css';

export const Header = () => {
  const cart = useSelector(selectTotalItems);
  return (
    <header>
      <Link to="/" id="site-logo">The Apparel Store</Link>
      <div id="header-right-side">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <div id="cart-icon">
            <Link to="/cart">
              <img alt="shopping cart icon" src={'/img/cart.svg'} />
              <span>{cart}</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
