import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../app/store.js';
import { removeItem, addItem, selectCart } from './cartSlice';
import { fetchOne } from '../../components/detail/detailAPI.js';
import './Cart.css';

export function Cart(props) {
  // const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('2');

  // const incrementValue = Number(incrementAmount) || 0;

  const handleClick = (e) => {
    // identifies the product clicked on and what to do with it
    const productId = e.target.closest("button")
      .firstChild.parentElement.parentElement.parentElement
      .firstChild.href.split("/").slice(-1)[0];
    const action = e.target.closest("button").firstChild.name;

    // adds or removes it from the cart
    if (action === "remove-from-cart") {
        if (props.location.pathname === "/cart") {
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
        .then((data)=>{ 
          dispatch(addItem(data));
        })
        .then(()=>{
            document.querySelector('a[href="/cart"]').click();
        })
        ;
    }
  }

  return (
    <main>
      <h1>Cart 2</h1>
      <div id="cart-wrapper">
        {
          store.getState().cart.items.map((item, index) => (
            <div key={index}>          
              <a href={"/" + item.id}>
                <img src={item.image} width="100px"/>
                <p>{item.title}</p>
                <p>${item.price}</p>
                <p>{item.category}</p>
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
            </div>
          )
        )}
      </div>
    </main>
  );
}
