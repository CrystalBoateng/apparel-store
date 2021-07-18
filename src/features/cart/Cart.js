import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../app/store.js';
import { Thumbnail } from '../../components/thumbnail/Thumbnail';
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
          <Thumbnail
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
