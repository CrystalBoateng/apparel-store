import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeItem: (state, action) => {
      if (action.payload.method === "selectedIndex") {
        // removes the requested instance of the product from the cart array
        if (action.payload.number >= 0)
          state.items.splice(action.payload.number, 1);
      } else if (action.payload.method === "lastInstance") {
        // loops backwards, removes last instance of the product from cart array
        for (let i = state.items.length-1; i >= 0;  i--) {
          if (parseInt(state.items[i].id) === parseInt(action.payload.number)) {
            state.items.splice(state.items.length + 1 - i, 1);
            break;
          }
        }
      }
      // updates the total price and number of items in cart
      state.totalItems = state.items.length;
      let subtotal = 0;
      state.items.forEach(i => subtotal += i.price);
      state.totalPrice = subtotal.toFixed(2);
    },
    addItem: (state, action) => {
      state.items = state.items.concat(action.payload);
      // updates the total price and number of items in cart
      state.totalItems = state.items.length;
      let subtotal = 0;
      state.items.forEach(i => subtotal += i.price);
      state.totalPrice = subtotal.toFixed(2);;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    }
  },
});

export const { removeItem, addItem, clearCart } = cartSlice.actions;
export const selectTotalItems = (state) => state.cart.totalItems;
export const selectTotalPrice = (state) => state.cart.totalPrice;

export default cartSlice.reducer;
