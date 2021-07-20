import React from 'react';
import './Home.css';

export function Home() {
  return (
    <main id="home-page">
      <section>
        <h1>The Apparel Store</h1>
      </section>
      <section>
        <h2>Clothing & Accessories</h2>
        <div className="categories">        
          <div>
            <img 
              alt="Close-up of a tan knitted sweater, plant with small leaves, black container of amber, and corner of a brown hat."
              src={"/img/sweater-house-plant.jpg"}
            />
            <span>Womenswear</span>
          </div>
          <div>
            <img 
              alt="Headshot of man with a beard wearing tan sweater, sunglasses, and gold necklace."
              src={"/img/man.jpg"}
            />
            <span>Menswear</span>
          </div>
          <div>
            <img 
              alt="Close-up of woman's ear wearing a silver earing, gold necklace, and white shirt."
              src={"/img/earring.jpg"}
            />
            <span>Jewelery</span>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
      <section>
        <h2>Ipsum Lorem</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </section>
    </main>
  )
}

