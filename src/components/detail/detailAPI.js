// async get request to the Fake Store API
export const fetchOne = (id) => {
  return new Promise((resolve) =>
    fetch('https://fakestoreapi.com/products'+ id)
      .then(response => response.json())
      .then(data => resolve(data))
  );
}
