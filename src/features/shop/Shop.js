import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllItems, selectAllApparel } from './shopSlice';
import { store } from '../../app/store.js';
import styles from './Shop.module.css';
import { fetchAll } from './shopAPI';

export function Shop() {
  const allApparel = useSelector(selectAllApparel);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAll().then( (data)=>{ 
      dispatch(fetchAllItems(data))
    } )
    console.log( allApparel )
  }, []);

  return (
    <div>LIST VIEW</div>
  );
}
