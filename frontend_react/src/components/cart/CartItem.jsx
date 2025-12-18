import React from 'react';
import '../../styles/cart.css';

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>{item.price} VND</p>
      <p>Số lượng: {item.quantity}</p>
    </div>
  );
};

export default CartItem;
