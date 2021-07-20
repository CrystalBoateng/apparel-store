import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../app/store.js';
import { selectTotalPrice } from '../cart/cartSlice';
import { LargeThumbnail } from '../../components/large-thumbnail/LargeThumbnail';
import './Cart.css';

export function Cart(props) {
  const cartTotal = useSelector(selectTotalPrice);
  return (
    <main id="cart-page">
      <h1>Cart</h1>
      <div>
        <p><span>Total: </span>${cartTotal}</p>
        <Link to="/checkout">
          <button>Checkout</button>
        </Link>
      </div>

      <div id="cart-wrapper">
      {
        store.getState().cart.items.map((item, index) => (
          <LargeThumbnail
            key={index}
            id={item.id}
            src={item.image}
            title={item.title}
            price={item.price}
            category={item.category}
          / >
        )
      )}
      </div>
    </main>
  );
}
