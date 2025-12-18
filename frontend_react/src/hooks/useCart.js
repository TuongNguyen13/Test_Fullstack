import { useState } from 'react';
import { createOrder } from '../services/orderService';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.productId === product.productId);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

   setTotalPrice(prevTotal => prevTotal + product.price) ;
  };

  const handleCheckout = async () => {
    await createOrder(cartItems, totalPrice);
    alert('Thanh toán thành công');
    setCartItems([]);
    setTotalPrice(0);
  };

  return {
    cartItems,
    addToCart,
    totalPrice,
    handleCheckout
  };
};
