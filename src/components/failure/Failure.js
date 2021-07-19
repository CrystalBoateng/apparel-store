import { Link } from 'react-router-dom';
import './Failure.css';

export const Failure = () => {
  return (
    <main>
    <h1>There was a problem submitting your order.</h1>
    <p>Please <Link to="/checkout">return to the checkout page</Link> and try again</p>
    </main>
  );
}
