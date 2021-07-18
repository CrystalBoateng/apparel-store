import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allItems: [],
  filteredItems: [{"id":0,"title":"","price":"","description":"","category":"","image":"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"}]
};

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    fetchAllItems: (state, action) => {
      state.allItems = action.payload;
    },
    fillFilteredItems: (state, action) => {
      state.filteredItems = action.payload;
    },
    updateMin: (state, action) => {
      state.filteredItems = state.filteredItems.filter(
        item => item.price >= action.payload
      );
    },
    updateMax: (state, action) => {
      state.filteredItems = state.filteredItems.filter(
        item => item.price <= action.payload
      );
    },
    updateCategories: (state, action) => {
      state.filteredItems = state.allItems.filter(
        (item) => (action.payload.indexOf(item.category) >= 0)
      );
    },
    clearCategories: (state) => {},
    updateSearch: (state, action) => {
      state.filteredItems = state.filteredItems.filter(
        (item) => (item.title.toLowerCase()
          .indexOf(action.payload.toLowerCase()) >= 0)
      );
    },
    sortPrice: (state, action) => {
      const compare = (a, b) => {
        let comparison = 0;
        if (a.price > b.price) {
          comparison = 1;
        } else if (a.price < b.price) {
          comparison = -1;
        }
        if (action.payload === "form-sort-highest-price")
          return comparison * -1;
        return comparison;
      }
      state.filteredItems = state.filteredItems.sort(compare);
    }
  },
});

export const { fetchAllItems, fillFilteredItems, updateMin, updateMax, updateCategories, clearCategories, updateSearch, sortPrice } = shopSlice.actions;

export const selectAllApparel = (state) => state.shop.allItems;
export const selectFilteredApparel = (state) => state.shop.filteredItems;

export default shopSlice.reducer;
