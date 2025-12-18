import React from 'react';
import '../../styles/product.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{(product.price).toLocaleString("vi-VN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})} VND</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default ProductCard;
