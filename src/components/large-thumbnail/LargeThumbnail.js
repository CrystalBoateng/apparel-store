import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, addItem } from '../../features/cart/cartSlice';
import { fetchOne } from '../detail/detailAPI';
import './LargeThumbnail.css';

export function LargeThumbnail(props) {
  const dispatch = useDispatch();
  useEffect(() => {
  });
  const handleClick = (e) => {
    // identifies the product number clicked on and what to do with it
    const productId = e.target.closest("button")
      .firstChild.parentElement.parentElement.parentElement
      .firstChild.href.split("/").slice(-1)[0];
    const action = e.target.closest("button").firstChild.name;
    const userIsOnCartPage = window.location.href
      .split("/").slice(-1)[0] === "cart";

    // adds or removes it from the cart
    if (action === "remove-from-cart") {
        if (userIsOnCartPage) {
          let wrapper = document.getElementById('cart-wrapper');
          let target = e.target.closest("button")
            .firstChild.parentElement.parentElement.parentElement;
          let productIndex = Array.from(wrapper.children).indexOf(target)
          dispatch(removeItem({method: "selectedIndex", number: productIndex}));
          document.querySelector('a[href="/cart"]').click();
        } else {
          dispatch(removeItem({method: "lastInstance", number: productId}));
        }
    }
      // console.log(store.getState().cart.items)
    if (action === "add-to-cart") {
      // pulls that item's details from the server and adds them to the store
      fetchOne("/" + productId)
        .then((data)=>{ dispatch(addItem(data)); })
        .then(()=>{
          if (userIsOnCartPage)
            document.querySelector('a[href="/cart"]').click();
        });
    }
  }
  return (
    <div>          
      <a href={"/" + props.id}>
        <img src={props.src} width="100px"/>
        <p>{props.title}</p>
        <p>${props.price}</p>
        <p>{props.category}</p>
      </a>
      <span>
        <button className="remove-from-cart" onClick={handleClick}>
          <img alt={"Remove from Cart"} className="remove-from-cart" name="remove-from-cart"
            src={"/img/placeholder.png"} />
         </button>
        <button className="add-to-cart" onClick={handleClick}>
          <img alt={"Add to Cart"} className="add-to-cart" name="add-to-cart"
            src={"/img/placeholder.png"} />
         </button>
      </span>
      <hr />
    </div>
  );
}
