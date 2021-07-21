import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../app/store.js';
import { selectTotalPrice } from '../cart/cartSlice';
import { LargeThumbnail } from '../../components/large-thumbnail/LargeThumbnail';
import './Cart.css';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Cart } from './Cart';

test('displays customer total', () => {
  render(
    <Provider store={store}>
      <Router>
        <Cart />
      </Router>
    </Provider>
  );
  expect(screen.getByText("Total:")).toBeInTheDocument();
});

test('displays checkout button', () => {
  render(
    <Provider store={store}>
      <Router>
        <Cart />
      </Router>
    </Provider>
  );
  expect(screen.getByText("Checkout")).toBeInTheDocument();
});

// test('Checkout button takes user to Checkout page', async () => {
//   render(
//     <Provider store={store}>
//       <Router>
//         <Cart />
//       </Router>
//     </Provider>
//   );
//   fireEvent.click(screen.getByText('Checkout'));
//   await waitFor(() => screen.getByText("Checkout"));
//   expect(screen.getByText("Checkout")).toBeInTheDocument();
// });
