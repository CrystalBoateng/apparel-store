import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { store } from '../../app/store.js';
import { SmallThumbnail } from '../../components/small-thumbnail/SmallThumbnail';
import { updateCustomer } from './checkoutSlice';
import { pushOrder } from './checkoutAPI';
import './Checkout.css';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Checkout } from './Checkout';

test('displays Submit Order button', () => {
  render(
    <Provider store={store}>
      <Router>
        <Checkout />
      </Router>
    </Provider>
  );
  expect(screen.getByText("Submit Order")).toBeInTheDocument();
});

// test('Submit Order takes user to Success if server sends 200 response', async () => {
//   render(
//     <Provider store={store}>
//       <Router>
//         <Checkout />
//       </Router>
//     </Provider>
//   );
//   fireEvent.click(screen.getByText('Submit Order'));
//   await waitFor(() => screen.getByText("Success!"));
//   expect(screen.getByText("Success!")).toBeInTheDocument();
// });
