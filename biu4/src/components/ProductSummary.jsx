function ProductSummary({ products }) {
  const availableProducts = products.filter((product) => product.available);
  const totalAvailable = availableProducts.length;
  const totalValue = availableProducts.reduce((sum, product) => {
    const price = parseFloat(product.price.replace(" PLN", ""));
    return sum + price;
  }, 0);

  return (
    <div id="product-summary">
      <h2>Summary</h2>
      <p>Total available: {totalAvailable}</p>
      <p>Total value: {totalValue + " PLN"}</p>
    </div>
  );
}

export default ProductSummary;
