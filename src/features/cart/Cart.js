import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../app/store.js';
import { LargeThumbnail } from '../../components/large-thumbnail/LargeThumbnail';
import './Cart.css';

export function Cart(props) {
  const dispatch = useDispatch();
  return (
    <main>
      <h1>Cart</h1>
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
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
