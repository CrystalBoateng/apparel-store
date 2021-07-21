import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Home } from './Home';

test('displays hero section and two additional sections below', () => {
  render(<Home />);
  expect(screen.getByText("The Apparel Store")).toBeInTheDocument();
  
  expect(screen.getByText("Clothing & Accessories")).toBeInTheDocument();
  screen.getByAltText("Close-up of a tan knitted sweater, plant with small leaves, black container of amber, and corner of a brown hat.");
  expect(screen.getByText("Womenswear")).toBeInTheDocument();
  screen.getByAltText("Headshot of man with a beard wearing tan sweater, sunglasses, and gold necklace.");
  expect(screen.getByText("Menswear")).toBeInTheDocument();
  screen.getByAltText("Close-up of woman's ear wearing a silver earing, gold necklace, and white shirt.");
  expect(screen.getByText("Jewelery")).toBeInTheDocument();
  
  expect(screen.getByText("Ipsum Lorem")).toBeInTheDocument();
});
