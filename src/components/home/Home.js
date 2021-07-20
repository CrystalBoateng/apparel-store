import React from 'react';
import './Home.css';

export function Home() {
  return (
    <main id="frontpage">
      <section>
        <h1>The Apparel Store</h1>
      </section>
      <section>
        <h2>Latest Releases</h2>
        <div class="categories">        
          <div>
            <img src={"/img/sweater-house-plant.jpg"} />
            <span>Women's Wear</span>
          </div>
          <div>
            <img src={"/img/man.jpg"} />
            <span>Men's Wear</span>
          </div>
          <div>
            <img src={"/img/earring.jpg"} />
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

