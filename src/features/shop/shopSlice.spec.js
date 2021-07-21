import shopReducer, {
  fetchAllItems,
  fillFilteredItems,
  updateMin,
  updateMax,
  updateCategories,
  updateSearch,
  sortPrice,
} from './shopSlice';

describe('shop reducer', () => {
  const initialState = {
    allItems: [],
    filteredItems: [{"id":0,"title":"","price":"","description":"","category":"","image":"/img/loading.gif"}]
  };
  
  const populatedStateOne = {
    allItems: [
      {"id":0,"title":"A","price":"100","description":"","category":"mens","image":""},
      {"id":0,"title":"B","price":"20","description":"","category":"womens","image":""},
      {"id":0,"title":"C","price":"35","description":"","category":"jewelery","image":""},
    ],
    filteredItems: []
  }
  
  const populatedStateTwo = {
    allItems: [],
    filteredItems: [
      {"id":0,"title":"A","price":"100","description":"","category":"mens","image":""},
      {"id":0,"title":"B","price":"20","description":"","category":"womens","image":""},
      {"id":0,"title":"C","price":"35","description":"","category":"jewelery","image":""},
      {"id":0,"title":"D","price":"30","description":"","category":"jewelery","image":""},
      {"id":0,"title":"E","price":"5","description":"","category":"jewelery","image":""},
    ]
  }
  
  const populatedStateThree = {
    allItems: [],
    filteredItems: [
      {"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"},
      {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"},
      {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},
    ]
  }

  it('should handle initial state', () => {
    expect(shopReducer(undefined, { type: 'unknown' })).toEqual({
      allItems: [],
      filteredItems: [{"id":0,"title":"","price":"","description":"","category":"","image":"/img/loading.gif"}]
    });
  });

  it('should update allItems to equal the payload value', () => {
    const actual = shopReducer(initialState, fetchAllItems("example value"));
    expect(actual.allItems).toEqual("example value");
  });

  it('should update filteredItems to equal the payload value', () => {
    const actual = shopReducer(initialState, fillFilteredItems("example value"));
    expect(actual.filteredItems).toEqual("example value");
  });
  
  it('should filter out products which cost less than $20', () => {
    const actual = shopReducer(populatedStateTwo, updateMin(20));
    expect(actual.filteredItems).toEqual([
      {"id":0,"title":"A","price":"100","description":"","category":"mens","image":""},
      {"id":0,"title":"B","price":"20","description":"","category":"womens","image":""},
      {"id":0,"title":"C","price":"35","description":"","category":"jewelery","image":""},
      {"id":0,"title":"D","price":"30","description":"","category":"jewelery","image":""},
    ]);
  });

  it('should filter out products which cost more than $50', () => {
    const actual = shopReducer(populatedStateTwo, updateMax(50));
    expect(actual.filteredItems).toEqual([
      {"id":0,"title":"B","price":"20","description":"","category":"womens","image":""},
      {"id":0,"title":"C","price":"35","description":"","category":"jewelery","image":""},
      {"id":0,"title":"D","price":"30","description":"","category":"jewelery","image":""},
      {"id":0,"title":"E","price":"5","description":"","category":"jewelery","image":""},
    ]);
  });

  it('should retain only the product with the category "mens"', () => {
    const actual = shopReducer(populatedStateOne, updateCategories("mens"));
    expect(actual.filteredItems).toEqual([
      {"id":0,"title":"A","price":"100","description":"","category":"mens","image":""},
    ]);
  });

  it('should retain only the product with the title "A"', () => {
    const actual = shopReducer(populatedStateTwo, updateSearch("A"));
    expect(actual.filteredItems).toEqual([
      {"id":0,"title":"A","price":"100","description":"","category":"mens","image":""},
    ]);
  });
  
  it('should sort filteredItems from highest-to-lowest price', () => {
    const actual = shopReducer(
      populatedStateThree, sortPrice("form-sort-highest-price")
    );
    expect(actual.filteredItems).toEqual([
      {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},
      {"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"},
      {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"},
    ]);
  });
  
  it('should sort filteredItems from lowest-to-highest price', () => {
    const actual = shopReducer(
      populatedStateThree, sortPrice("form-sort-lowest-price")
    );
    expect(actual.filteredItems).toEqual([
      {"id":4,"title":"Mens Casual Slim Fit","price":15.99,"description":"The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.","category":"men's clothing","image":"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"},
      {"id":3,"title":"Mens Cotton Jacket","price":55.99,"description":"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.","category":"men's clothing","image":"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"},
      {"id":5,"title":"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet","price":695,"description":"From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.","category":"jewelery","image":"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"},
    ]);
  });
});
