import { createAsyncThunk, createSlice, configureStore } from '@reduxjs/toolkit';
import { fetchAll } from './shopAPI';

const initialState = {
  allItems: [{"id":0,"title":"","price":0.00,"description":"","category":"","image":"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"}]
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    fetchAllItems: (state, action) => {
      state.allItems = action.payload
    }
  },
});

export const { fetchAllItems } = shopSlice.actions;

export const selectAllApparel = (state) => state.shop.allItems;

export default shopSlice.reducer;
