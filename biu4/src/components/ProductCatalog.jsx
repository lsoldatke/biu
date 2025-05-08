import React, { useState } from "react";
import ProductInfo from "./ProductInfo";

function ProductCatalog({ products }) {
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const toggleAvailabilityFilter = () => {
    setShowOnlyAvailable((prev) => !prev);
  };

  const filteredProducts = showOnlyAvailable
    ? products.filter((product) => product.available)
    : products;

  return (
    <div id="product-catalog">
      <h1 id="product-catalog-title">Products</h1>
      <button id="availability-filter-btn" onClick={toggleAvailabilityFilter}>
        {showOnlyAvailable ? "Show all" : "Show available"}
      </button>
      <div id="products">
        {filteredProducts.map((product) => (
          <ProductInfo key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;
