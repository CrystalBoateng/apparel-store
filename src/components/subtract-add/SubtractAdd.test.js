import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, addItem } from '../../features/cart/cartSlice';
import { fetchOne } from '../detail/detailAPI';
import './SubtractAdd.css';
import { store } from '../../app/store';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SubtractAdd } from './SubtractAdd';

test('displays buttons to add and remove items from cart', () => {
  const { shop } = render(
    <Provider store={store}>
      <SubtractAdd />
    </Provider>
  );
  screen.getByAltText("Remove from Cart");
  screen.getByAltText("Add to Cart");
});