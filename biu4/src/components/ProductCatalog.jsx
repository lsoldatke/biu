function ProductCatalog({ products }) {
  return (
    <div id="products">
      {products.map((product) => (
        <ProductInfo key={product.name} product={product} />
      ))}
    </div>
  );
}

export default ProductCatalog;
