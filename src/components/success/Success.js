import React, { useState, useEffect } from 'react';
import { store } from '../../app/store';
import { useDispatch } from 'react-redux';
import { SmallThumbnail } from '../../components/small-thumbnail/SmallThumbnail';
import { clearCart } from '../../features/cart/cartSlice';
import { clearCustomer } from '../../features/checkout/checkoutSlice';
import './Success.css';

export function Success (props) {
  const dispatch = useDispatch();
  const p = props.location.state.person;
  const o = props.location.state.order;
  // empties the cart and customer data from the redux store
  dispatch(clearCart());
  dispatch(clearCustomer());

  return (
    <main> 
      <h1>Success!</h1>
      <p>Your order has been placed.</p>
      <p><span>Name</span>: {p.nameFirst} {p.nameLast}</p>
      <p><span>Address</span>: {p.addressStreet} / {p.addressCity}, {p.addressState} / {p.addressZip}</p>
      <p>Credit <span>card</span>: XXXX-XXXX-XXXX-{p.cardNumber.slice(-4)}</p>
      <p><span>Phone</span>: {p.phone}</p>
      <p><span>Email</span>: {p.email}</p>
      {
        o.map((item, index) => (
          <SmallThumbnail 
            key={index}
            src={item.image}
            price={item.price}
            title={item.title}
          / >
        )
      )}
    </main>
  );
}