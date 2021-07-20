import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Home } from './components/home/Home';
import { Shop } from './features/shop/Shop';
import { Cart } from './features/cart/Cart';
import { Checkout } from './features/checkout/Checkout';
import { Detail } from './components/detail/Detail';
import { Success } from './components/success/Success';
import { Failure } from './components/failure/Failure';
import { Citations } from './components/citations/Citations';
import { fetchAll } from './features/shop/shopAPI';
import './index.css';

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
