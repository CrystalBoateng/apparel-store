// async request for data from the Fake Store API
export function fetchAll() {
  return new Promise((resolve) =>
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => resolve(data))
  );
}
