"use client";

import { useEffect, useState } from "react";

export default function StorePage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError("Could not load products. Try refreshing the page.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  const searchText = search.trim().toLowerCase();
  const matchingProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchText)
  );

  return (
    <main>
      <h1>Store</h1>
      <label htmlFor="product-search">Search by title</label>{" "}
      <input
        id="product-search"
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p>Loading products…</p>}
      {error && <p role="alert">{error}</p>}
      {!loading && !error && (
        <>
          <p>{matchingProducts.length} products found</p>
          <table>
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {matchingProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      width={60}
                      height={60}
                      style={{ objectFit: "contain" }}
                    />
                  </td>
                  <td>${product.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </main>
  );
}
