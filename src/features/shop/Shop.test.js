import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../app/store';
import { LargeThumbnail } from '../../components/large-thumbnail/LargeThumbnail';
import { fetchAll } from './shopAPI';
import {
  fetchAllItems,
  fillFilteredItems,
  updateMin,
  updateMax,
  updateCategories,
  updateSearch,
  sortPrice,
  selectFilteredApparel
} from './shopSlice';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Shop } from './Shop';

test('displays sidebar section', () => {
  render(
    <Provider store={store}>
      <Shop />
    </Provider>
  );
  expect(screen.getByText("Filter")).toBeInTheDocument();
  expect(screen.getByText("Sort")).toBeInTheDocument();
});

test('displays "$" in front of prices', () => {
  const { shop } = render(
    <Provider store={store}>
      <Shop />
    </Provider>
  );
  expect(screen.getByText("$")).toBeInTheDocument();
});
