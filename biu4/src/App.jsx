import React from "react";
import ProductCatalog from "./components/ProductCatalog";
import ProductSummary from "./components/ProductSummary";

function App() {
  const products = [
    {
      name: "Smartphone with large display",
      price: "2999 PLN",
      description:
        "Modern smartphone with a 6.7” AMOLED screen, 128GB storage, and triple camera setup.",
      available: true,
      discount: 10,
    },
    {
      name: "Laptop for work and entertainment",
      price: "4599 PLN",
      description:
        "Powerful laptop with Intel i7 processor, 16GB RAM, and 512GB SSD.",
      available: false,
      discount: 15,
    },
    {
      name: "Wireless noise-cancelling headphones",
      price: "399 PLN",
      description:
        "Wireless headphones with active noise cancellation and 30-hour battery life.",
      available: false,
      discount: 5,
    },
    {
      name: "55” 4K LED TV",
      price: "3299 PLN",
      description:
        "4K UHD TV with HDR10+ technology and built-in Smart TV features.",
      available: true,
      discount: 20,
    },
    {
      name: "Pressure coffee maker",
      price: "899 PLN",
      description:
        "Automatic espresso machine with milk frothing function and adjustable coffee strength.",
      available: true,
      discount: 0,
    },
  ];

  return (
    <>
      <ProductCatalog products={products} />
      <ProductSummary products={products} />
    </>
  );
}

export default App;
