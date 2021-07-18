import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../app/store';
import { Thumbnail } from '../../components/thumbnail/Thumbnail';
import { fetchAll } from './shopAPI';
import {
  fetchAllItems,
  fillFilteredItems,
  updateMin,
  updateMax,
  updateCategories,
  clearCategories,
  updateSearch,
  sortPrice,
  selectAllApparel,
  selectFilteredApparel
} from './shopSlice';
import './Shop.css';

export function Shop() {
  const allApparel = useSelector(selectAllApparel);
  const filteredApparel = useSelector(selectFilteredApparel);
  const dispatch = useDispatch();
  const filterByCategories = () => {
    // dispatches an action with a list of filtered category names as the payload
    const boxes = document.getElementsByClassName("checkbox");
    const categories = []
    for (let i = 0; i < boxes.length; i++) {
      let cat;
      switch (boxes[i].id) {
        case 'form-mens-clothing':
          cat = "men's clothing"
          break;
        case 'form-womens-clothing':
          cat = "women's clothing"
          break;
        case 'form-jewelery':
          cat = "jewelery"
          break;
        case 'form-electronics':
          cat = "electronics"
          break;
      }
      categories.push({
        id: cat,
        bool: boxes[i].checked
      });
    }
    const categoriesToDisplay = categories.filter(c=>c.bool);
    dispatch(updateCategories(Array.from(categoriesToDisplay, x=> x.id)))
  }
  const filterByMin = () => {
    // dispatches an action with the minimum requested price as the payload
    const price = document.getElementById("form-min").value;
    dispatch(updateMin(price));
  }
  const filterByMax = () => {
    // dispatches an action with the maximum requested price as the payload
    const price = document.getElementById("form-max").value;
    dispatch(updateMax(price));
  }
  const filterBySearch = () => {
    // dispatches an action with the search term as the payload
    const term = document.getElementById("form-search").value;
    dispatch(updateSearch(term));
  }
  const handleFilter = () => {
    // filters allApparel using every filter in the DOM
    filterByCategories();
    filterByMin();
    filterByMax();
    filterBySearch();
  }
  const handleSort = (e) => {
    // sorts filteredApparel
    dispatch(sortPrice(e.target.closest("button").id))
  }

  useEffect(() => {
    // pulls list view data from the API
    fetchAll()
      .then((data)=>{ dispatch(fetchAllItems(data)); })
      .then(()=>{ dispatch(fillFilteredItems(store.getState().shop.allItems)) });
    // shows all categories by default
    let boxes = document.getElementsByClassName("checkbox");
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].checked = true
    }
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <aside id="alter-list">
        <h2>Alter List</h2>

        <label htmlFor="form-search" className="hidden">Search</label>
        <input id="form-search" type="search" name="query" role="search" autoFocus placeholder="Search..." onChange={handleFilter} />
        
        <section>
          <h3>Filter</h3>
          <label htmlFor="form-min" className="hidden">Minimum Value</label>
          <input id="form-min" type="number" name="query" role="search" defaultValue="0" onChange={handleFilter} />
          <hr />
          <label htmlFor="form-max" className="hidden">Maximum Value</label>
          <input id="form-max" type="number" name="query" role="search" defaultValue="999.99" onChange={handleFilter} />

          <input type="checkbox" className="checkbox" id="form-mens-clothing" name="mens-clothing" onChange={handleFilter} />
          <label htmlFor="form-mens-clothing">Men's Clothing</label>
          <input type="checkbox" className="checkbox" id="form-womens-clothing" name="womens-clothing" onChange={handleFilter} />
          <label htmlFor="form-womens-clothing">Women's Clothing</label>
          <input type="checkbox" className="checkbox" id="form-jewelery" name="jewelery" onChange={handleFilter} />
          <label htmlFor="form-jewelery">Jewelery</label>
          <input type="checkbox" className="checkbox" id="form-electronics" name="electronics" onChange={handleFilter} />
          <label htmlFor="form-electronics">electronics</label>
        </section>

        <section>
          <h3>Sort</h3>
          <button id="form-sort-highest-price" onClick={handleSort}>
            <img alt={"Highest-to-lowest"} name="sort-highest-to-lowest"
              src={"/img/placeholder.png"} />
           </button>
          <button id="form-sort-lowest-price" onClick={handleSort}>
            <img alt={"Lowest-to-highest"} name="sort-lowest-to-lowest"
              src={"/img/placeholder.png"} />
           </button>
        </section>
      </aside>
      
      <main id="products" className="thumbnails">
        <h2>Products</h2>
        {
          filteredApparel.map((item, index) => (
            <Thumbnail
              key={index}
              id={item.id}
              src={item.image}
              title={item.title}
              price={item.price}
              category={item.category}
            / >
          )
        )}
      </main>

    </div>
  );
}
