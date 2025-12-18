import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../../services/productService';
import '../../styles/product.css';

const ProductGrid = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.productId} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductGrid;
