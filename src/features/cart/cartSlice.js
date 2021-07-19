import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [
    {"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"},
    {"id":11,"title":"Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5","price":109,"description":"3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.","category":"electronics","image":"https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"},
  ],
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
          if (state.items[i].id == action.payload.number) {
            state.items.splice(state.items.length + 1 - i, 1);
            break;
          }
        }
      }
      // updates the total price and number of items in cart
      state.totalItems = state.items.length;
      state.totalPrice = 0;
      state.items.forEach(i => state.totalPrice += i.price);
    },
    addItem: (state, action) => {
      state.items = state.items.concat(action.payload);
      // updates the total price and number of items in cart
      state.totalItems = state.items.length;
      state.totalPrice += action.payload.price;
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    }
  },
});

export const { removeItem, addItem, clearCart } = cartSlice.actions;
export const selectCart = (state) => state.cart.totalItems;

export default cartSlice.reducer;
