import React from "react";
import ProductCatalog from "./components/ProductCatalog";
import ProductSummary from "./components/ProductSummary";

function App() {
  const products = [];

  return (
    <>
      <ProductCatalog products={products} />
      <ProductSummary products={products} />
    </>
  );
}

export default App;
