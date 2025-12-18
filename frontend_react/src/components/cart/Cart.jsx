import React from 'react';
import CartItem from './CartItem';
import '../../styles/cart.css';

const Cart = ({ cartItems, totalPrice }) => {
  console.log(cartItems);
  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      
      <div className="cart-items-container">
        {cartItems.length === 0 ? (
          <p>Giỏ hàng trống</p>
        ) : (
          cartItems.map(item => <CartItem key={item.productId} item={item} />)
        )}
      </div>

      <div className="total">
        <p>Tổng tiền: {(Math.round(totalPrice * 100)/100).toLocaleString("vi-VN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })} VND</p>
      </div>
    </div>
  );
};

export default Cart;