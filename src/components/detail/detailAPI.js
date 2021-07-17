import React from 'react';
// async get request to the Fake Store API
export const fetchOne = (props) => {
  return new Promise((resolve) =>
    fetch('https://fakestoreapi.com/products'+ props)
      .then(response => response.json())
      .then(data => resolve(data))
  );
}
