import React from "react";
import ProductInfo from "./ProductInfo";

function ProductCatalog({ products }) {
  return (
    <div id="product-catalog">
      <h1 id="product-catalog-title">Products</h1>
      <div id="products">
        {products.map((product) => (
          <ProductInfo key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductCatalog;
