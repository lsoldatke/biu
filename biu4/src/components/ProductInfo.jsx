function ProductInfo({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <p className="product-description">{product.description}</p>
      <p>{product.available}</p>
      <button>Buy now</button>
    </div>
  );
}

export default ProductInfo;
