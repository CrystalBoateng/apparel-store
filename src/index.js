import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Home } from './Home';
import { Shop } from './features/shop/Shop';


const Header = () => <div>
  <Link to="/">Home</Link>
  <Link to="/shop">Shop</Link>
  <Link to="/checkout">Checkout</Link>
  <Link to="/cart">cart_icon</Link>
</div>;
const Footer = () => <div>
  <p>Copyright 2021</p>
  <Link to="/">Home</Link>
  <Link to="/shop">Shop</Link>
  <Link to="/checkout">Checkout</Link>
  <Link to="/citations">Citations</Link>
</div>;
const Citations = () => <h1>Citations</h1>;
const Thumbnail = () => <h1>Thumbnail</h1>;
const Detail = () => <h1>Detail</h1>;
const Cart = () => <h1>Cart</h1>;
const Checkout = () => <h1>Checkout</h1>;
const Success = () => <h1>Success</h1>;
const Failure = () => <h1>Failure</h1>;
//

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/success" component={Success} />
          <Route path="/failure" component={Failure} />
          <Route path="/citations" component={Citations} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
