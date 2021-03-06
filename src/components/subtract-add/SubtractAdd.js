import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, addItem } from '../../features/cart/cartSlice';
import { fetchOne } from '../detail/detailAPI';
import './SubtractAdd.css';

export function SubtractAdd() {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    // identifies current page
    const userIsOnShopPage = window.location.href
      .split("/").slice(-1)[0] === "shop";
    const userIsOnCartPage = window.location.href
      .split("/").slice(-1)[0] === "cart";
    // identifies the product number clicked on and what to do with it
    let productId;
    if (userIsOnShopPage || userIsOnCartPage) {
    productId = e.target.closest("button")
      .firstChild.parentElement.parentElement.parentElement
      .firstChild.href.split("/").slice(-1)[0];
    } else {
      // user is on detail page
      productId = document.getElementById("detail-id").getAttribute("data-id")
    }
    const action = e.target.closest("button").firstChild.name;
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
    <span className="subtract-add">
      <button className="icon remove-from-cart" onClick={handleClick}>
        <img alt={"Remove from Cart"} className="remove-from-cart" 
          name="remove-from-cart" src={"/img/minus.svg"}
        />
       </button>
      <button className="icon add-to-cart" onClick={handleClick}>
        <img alt={"Add to Cart"} className="add-to-cart" 
          name="add-to-cart" src={"/img/plus.svg"}
        />
       </button>
    </span>
  );
}
