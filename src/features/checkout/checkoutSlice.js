import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customer: {
    "nameFirst": "",
    "nameLast": "",
    "addressStreet": "",
    "addressCity": "",
    "addressState": "",
    "addressZip": "",
    "cardNumber": "",
    "cardExpiration": "",
    "cardCvv": "",
    "phone": "",
    "email": "",
  }
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    updateCustomer: (state, action) => {
      state.customer = {
        "nameFirst": action.payload.nameFirst,
        "nameLast": action.payload.nameLast,
        "addressStreet": action.payload.addressStreet,
        "addressCity": action.payload.addressCity,
        "addressState": action.payload.addressState,
        "addressZip": action.payload.addressZip,
        "cardNumber": action.payload.cardNumber,
        "cardExpiration": action.payload.cardExpiration,
        "cardCvv": action.payload.cardCvv,
        "phone": action.payload.phone,
        "email": action.payload.email,
      }
    },
  },
});

export const { updateCustomer } = checkoutSlice.actions;
export const selectCustomer = (state) => state.checkout.customer;

export default checkoutSlice.reducer;
