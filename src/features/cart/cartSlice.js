import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {"id":3,"title":"","price":"","description":"","category":"","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"},
    {"id":100,"title":"","price":"","description":"","category":"","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"},
  ]
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
        for (let i = state.items.length; i >= 0;  i--) {
          console.log("i="+i);
          if (state.items[i].id === action.payload.number)
            state.items.splice(state.items.length - 1, 1);
        }
      }
      console.log(state.items);
    },
    addItem: (state, action) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export const { removeItem, addItem } = cartSlice.actions;
export const selectCart = (state) => state.cart.value;

export default cartSlice.reducer;
