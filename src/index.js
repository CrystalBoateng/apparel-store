import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Home } from './Home';
import { Shop } from './features/shop/Shop';
import { Cart } from './features/cart/Cart';
import { Thumbnail } from './components/thumbnail/Thumbnail';
import { Detail } from './components/detail/Detail';
import { fetchAll } from './features/shop/shopAPI';

const Header = () => <div>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/shop">Shop</Link>
    <Link to="/checkout">Checkout</Link>
  </nav>
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
const Checkout = () => <h1>Checkout</h1>;
const Success = () => <h1>Success</h1>;
const Failure = () => <h1>Failure</h1>;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detailRoutes: [] };
  }
  componentDidMount() {
    let detailPaths = [""]
    fetchAll().then((data)=>{
      detailPaths = data.map((item) => ("/" + item.id));
      this.setState({detailRoutes: detailPaths})
    });
  }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/success" component={Success} />
          <Route path="/failure" component={Failure} />
          <Route path="/citations" component={Citations} />
          {
            this.state.detailRoutes.map((p) => (
              <Route path={p} key={p} component={Detail} />
            ))
          }
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
