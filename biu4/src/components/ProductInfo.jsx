import React from "react";

function ProductInfo({ product }) {
  const handleBuyNowClick = () => {
    alert(
      `Kupiono ${product.name} za ${
        product.discount
          ? calculateDiscountedPrice(product.price, product.discount)
          : product.price
      }!`
    );
  };

  const calculateDiscountedPrice = (originalPriceStr, discountPercentage) => {
    const originalPrice = parseFloat(originalPriceStr.replace(" PLN", ""));

    return originalPrice - originalPrice * (discountPercentage / 100) + " PLN";
  };

  return (
    <div className="product-info">
      <div className="product-general-info">
        <h2 className="product-name">{product.name}</h2>
        <p>
          Price: {product.price}
          {product.discount &&
            product.discount > 0 &&
            ` Discount: ${calculateDiscountedPrice(
              product.price,
              product.discount
            )}`}
        </p>
      </div>
      <div className="product-details">
        <p className="product-description">{product.description}</p>
        {product.available ? (
          <p>Product available</p>
        ) : (
          <p>Product NOT available</p>
        )}
      </div>
      {product.available && (
        <button onClick={handleBuyNowClick}>Buy now</button>
      )}
    </div>
  );
}

export default ProductInfo;
