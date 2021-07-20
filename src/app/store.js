import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../features/shop/shopSlice';
import cartReducer from '../features/cart/cartSlice';
import checkoutReducer from '../features/checkout/checkoutSlice';

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  },
});
