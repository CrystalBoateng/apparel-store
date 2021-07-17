import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../app/store.js';
import { fetchOne } from './detailAPI';
import './Detail.css';

export function Detail(props) {
  const dispatch = useDispatch();
  let [title , setTitle] = useState("");
  let [price , setPrice] = useState("");
  let [description , setDescription] = useState("");
  let [category , setCategory] = useState("");
  let [image , setImage] = useState("");
  useEffect(() => {
    // pulls detail view data from the API, for the item in the URL path
    fetchOne(props.location.pathname)
      .then((data)=>{ 
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description);
        setCategory(data.category);
        setImage(data.image);
      })
  });

  return (
    <main> 
      <h1>{title}</h1>
        {image}
        {price}
        {category}
        {description}
        <p>-/+ icons</p>
    </main>
  );
}
