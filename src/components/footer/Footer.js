import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <p>© 2021</p>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/citations">Citations</Link>
      </div>
    </footer>
  );
}
