import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../app/store.js';
import { SmallThumbnail } from '../../components/small-thumbnail/SmallThumbnail';
import { updateCustomer, selectCustomer } from './checkoutSlice';
import './Checkout.css';

export function Checkout(props) {
  const customer = useSelector(selectCustomer);
  const dispatch = useDispatch();
  const [nameFirst, setNameFirst] = useState("Jane");
  const [nameLast, setNameLast] = useState("Smith");
  const [addressStreet, setAddressStreet] = useState("1111 Walnut St.");
  const [addressCity, setAddressCity] = useState("Cincinnati");
  const [addressState, setAddressState] = useState("Ohio");
  const [addressZip, setAddressZip] = useState("55555");
  const [cardNumber, setCardNumber] = useState("5555 5555 5555 5555");
  const [cardExpiration, setCardExpiration] = useState("55/55");
  const [cardCvv, setCardCvv] = useState("555");
  const [phone, setPhone] = useState("555-555-5555");
  const [email, setEmail] = useState("jane.smith@example.com");
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'nameFirst':
        setNameFirst(e.target.value); break;
      case 'nameLast':
        setNameLast(e.target.value); break;
      case 'addressStreet':
        setAddressStreet(e.target.value); break;
      case 'addressCity':
        setAddressCity(e.target.value); break;
      case 'addressState':
        setAddressState(e.target.value); break;
      case 'addressZip':
        setAddressZip(e.target.value); break;
      case 'cardNumber':
        setCardNumber(e.target.value); break;
      case 'cardExpiration':
        setCardExpiration(e.target.value); break;
      case 'cardCvv':
        setCardCvv(e.target.value); break;
      case 'phone':
        setPhone(e.target.value); break;
      case 'email':
        setEmail(e.target.value); break;
    }
  }
  const handleClick = (e) => {
    e.preventDefault();
    const customerDetails = {
      "nameFirst": nameFirst,
      "nameLast": nameLast,
      "addressStreet": addressStreet,
      "addressCity": addressCity,
      "addressState": addressState,
      "addressZip": addressZip,
      "cardNumber": cardNumber,
      "cardExpiration": cardExpiration,
      "cardCvv": cardCvv,
      "phone": phone,
      "email": email,
    }
    // dispatches customer info to the store
    dispatch(updateCustomer(customerDetails));
    // POSTing to 'https://fakestoreapi.com/carts because POST requests to \ 
    // https://fakestoreapi.com/users/7 not working.
    fetch('https://fakestoreapi.com/carts',{
      method:"POST",
      body:JSON.stringify(customerDetails)
    }).then(res=>{
      if (res.status == 200) {
        // manually sends customer details to "/success" as props so \
        // it can safely erase the checkout slice data
        props.history.push({
          pathname: "/success", state: {
            person: customerDetails,
            order: store.getState().cart.items.slice()
          }
        });
      } else {
        props.history.push({pathname: "/failure"});
      }
    });
  }

  return (
    <main>
      <h1>Check Out</h1>
      <form>
        <label htmlFor="nameFirst">First name:</label>
        <input type="text" name="nameFirst" onChange={handleChange}
          autoFocus placeholder="First name" value={nameFirst}
        />
        <label htmlFor="nameLast">Last name:</label>
        <input type="text" name="nameLast" onChange={handleChange}
          placeholder="Last name" value={nameLast}
        />
        <label htmlFor="addressStreet">Address:</label>
        <input type="text" name="addressStreet" onChange={handleChange}
          placeholder="Address" value={addressStreet}
        />
        <label htmlFor="addressCity">City:</label>
        <input type="text" name="addressCity" onChange={handleChange}
          placeholder="City" value={addressCity}
        />
        <label htmlFor="addressState">State:</label>
        <input type="text" name="addressState" onChange={handleChange}
          placeholder="State" value={addressState}
        />
        <label htmlFor="addressZip">Zip code:</label>
        <input type="number" name="addressZip" onChange={handleChange}
          placeholder="Zip code" value={addressZip}
        />
        <label htmlFor="cardNumber">Credit Card number:</label>
        <input type="text" name="cardNumber" onChange={handleChange}
          placeholder="Credit Card number" value={cardNumber}
        />
        <label htmlFor="cardExpiration">Expiration:</label>
        <input type="text" name="cardExpiration" onChange={handleChange}
          placeholder="Expiration" value={cardExpiration}
        />
        <label htmlFor="cardCvv">CVV:</label>
        <input type="number" name="cardCvv" onChange={handleChange} 
          placeholder="CVV" value={cardCvv}
        />
        <label htmlFor="phone">Phone number:</label>
        <input type="tel" name="phone" onChange={handleChange}
          placeholder="Phone number" value={phone}
        />
        <label htmlFor="email">Email address:</label>
        <input type="email" name="email" onChange={handleChange}
          placeholder="Email address" value={email}
        />
      </form>
      <button name="submit" onClick={handleClick}>Submit Order</button>
      <div id="checkout-items-wrapper">
      {
        store.getState().cart.items.map((item, index) => (
          <SmallThumbnail 
            key={index}
            src={item.image}
            price={item.price}
            title={item.title}
          />
        )
      )}
      </div>
    </main>
  );
}
