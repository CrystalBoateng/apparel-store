import checkoutReducer, {
  updateCustomer,
  clearCustomer,
} from './checkoutSlice';

describe('checkout reducer', () => {
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
  };

  const populatedState = {
    customer: {
      "nameFirst": "DEF",
      "nameLast": "DEF",
      "addressStreet": "DEF",
      "addressCity": "DEF",
      "addressState": "DEF",
      "addressZip": "DEF",
      "cardNumber": "DEF",
      "cardExpiration": "DEF",
      "cardCvv": "DEF",
      "phone": "DEF",
      "email": "DEF",
    }
  };

  it('should handle initial state', () => {
    expect(checkoutReducer(undefined, { type: 'unknown' })).toEqual({
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
    });
  });

  it('should add new customer data', () => {
    const payload = {
      "nameFirst": "ABC",
      "nameLast": "ABC",
      "addressStreet": "ABC",
      "addressCity": "ABC",
      "addressState": "ABC",
      "addressZip": "ABC",
      "cardNumber": "ABC",
      "cardExpiration": "ABC",
      "cardCvv": "ABC",
      "phone": "ABC",
      "email": "ABC",
    }
    const actual = checkoutReducer(initialState, updateCustomer(payload));
    expect(actual.customer).toEqual({
      "nameFirst": "ABC",
      "nameLast": "ABC",
      "addressStreet": "ABC",
      "addressCity": "ABC",
      "addressState": "ABC",
      "addressZip": "ABC",
      "cardNumber": "ABC",
      "cardExpiration": "ABC",
      "cardCvv": "ABC",
      "phone": "ABC",
      "email": "ABC",
    });
  });

  it('should replace existing customer data', () => {
    const payload = {
      "nameFirst": "new data",
      "nameLast": "new data",
      "addressStreet": "new data",
      "addressCity": "new data",
      "addressState": "new data",
      "addressZip": "new data",
      "cardNumber": "new data",
      "cardExpiration": "new data",
      "cardCvv": "new data",
      "phone": "new data",
      "email": "new data",
    }
    const actual = checkoutReducer(populatedState, updateCustomer(payload));
    expect(actual.customer).toEqual({
      "nameFirst": "new data",
      "nameLast": "new data",
      "addressStreet": "new data",
      "addressCity": "new data",
      "addressState": "new data",
      "addressZip": "new data",
      "cardNumber": "new data",
      "cardExpiration": "new data",
      "cardCvv": "new data",
      "phone": "new data",
      "email": "new data",
    });
  });

  it('should remove all customer data', () => {
    const actual = checkoutReducer(populatedState, clearCustomer());
    expect(actual.customer).toEqual({
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
    });
  });
});
