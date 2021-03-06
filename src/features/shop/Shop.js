import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '../../app/store';
import { LargeThumbnail } from '../../components/large-thumbnail/LargeThumbnail';
import { fetchAll } from './shopAPI';
import {
  fetchAllItems,
  fillFilteredItems,
  updateMin,
  updateMax,
  updateCategories,
  updateSearch,
  sortPrice,
  selectFilteredApparel
} from './shopSlice';
import './Shop.css';

export function Shop() {
  const filteredApparel = useSelector(selectFilteredApparel);
  const dispatch = useDispatch();
  const [lastSortOrder, setLastSortOrder] = useState();
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
        default:
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
    if (lastSortOrder)
      sort(lastSortOrder);
  }
  const sort = (sortOrder) => {
    // sorts filteredApparel
    dispatch(sortPrice(sortOrder));
    setLastSortOrder(sortOrder);
  }
  const handleSort = (e) => {
    sort(e.target.closest("button").id);
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
    <div id="shop-page">
      <h1>Shop</h1>
      <div>
        <aside id="alter-list">
          <h2>Alter List</h2>

          <label htmlFor="form-search" className="hidden">Search</label>
          <input id="form-search" type="search" name="query" role="search" placeholder="Search..." onChange={handleFilter} />
          <section id="filter-wrapper">
            <h3>Filter</h3>
            <div>
              <label htmlFor="form-min" className="hidden">Minimum Value</label>
              <input id="form-min" type="number" name="query" role="search" defaultValue="0" onChange={handleFilter} />
              <img alt="" src={"/img/bar.svg"} id="bar"/>
              <label htmlFor="form-max" className="hidden">Maximum Value</label>
              <input id="form-max" type="number" name="query" role="search" defaultValue="999.99" onChange={handleFilter} />
            </div>
            <div>
              <div>
                <input type="checkbox" className="checkbox" id="form-mens-clothing" name="mens-clothing" onChange={handleFilter} />
                <label htmlFor="form-mens-clothing">Men's Clothing</label>
              </div>
              <div>
                <input type="checkbox" className="checkbox" id="form-womens-clothing" name="womens-clothing" onChange={handleFilter} />
                <label htmlFor="form-womens-clothing">Women's Clothing</label>
              </div>
              <div>
                <input type="checkbox" className="checkbox" id="form-jewelery" name="jewelery" onChange={handleFilter} />
                <label htmlFor="form-jewelery">Jewelery</label>
              </div>
              <div>
                <input type="checkbox" className="checkbox" id="form-electronics" name="electronics" onChange={handleFilter} />
                <label htmlFor="form-electronics">electronics</label>
              </div>
            </div>
          </section>

          <section id="sort-wrapper">
            <h3>Sort</h3>
            <div>
              <p>Price:</p>
              <button id="form-sort-highest-price" className="icon" onClick={handleSort}>
                <img alt={"Highest-to-lowest"} name="sort-highest-to-lowest"
                  src={"/img/sort-down.svg"} />
               </button>
              <button id="form-sort-lowest-price" className="icon" onClick={handleSort}>
                <img alt={"Lowest-to-highest"} name="sort-lowest-to-lowest"
                  src={"/img/sort-up.svg"} />
               </button>
             </div>
          </section>
        </aside>
      
        <main id="products" className="thumbnails">
          <h2>Products</h2>
          {
            filteredApparel.map((item, index) => (
              <LargeThumbnail
                key={index}
                id={item.id}
                src={item.image}
                title={item.title}
                price={item.price}
                category={item.category}
              />
            )
          )}
        </main>
      </div>
    </div>
  );
}
