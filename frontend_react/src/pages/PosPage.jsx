import React, { useState, useEffect,useRef } from 'react';
import ProductGrid from '../components/product/ProductGrid';
import Cart from '../components/cart/Cart';
import { useCart } from '../hooks/useCart';
import '../styles/pos.css';
import Header from '../components/layout/Header';
import OrderList from '../components/order/OrderList';
import { getOrders } from '../services/orderService';




const PosPage = () => {
  const { cartItems, addToCart, totalPrice, handleCheckout } = useCart();
  const [orders, setOrders] = useState([]);
  const connectionRef = useRef(null);

 useEffect(() => {
  const fetchOrders = async () => {
    try {
      const orderList = await getOrders();
      setOrders(Array.isArray(orderList) ? orderList : []);
    } catch (err) {
      console.error(err);
    }
  };

  fetchOrders();
   const intervalId = setInterval(fetchOrders, 1000);

    
    return () => clearInterval(intervalId);
  }, []); 


  return (
    <div className="pos-container">
      <Header />
      <div className="pos-page">
        <h1>POS - Màn hình bán hàng</h1>
        <div className="pos-main-container">
          <div className="order-section">
            <h2>Danh sách đơn hàng</h2>
            <OrderList orders={orders} />
          </div>

          <div className="product-section">
            <ProductGrid addToCart={addToCart} />
          </div>

          <div className="cart-section">
            <Cart cartItems={cartItems} totalPrice={totalPrice} />
            <button onClick={handleCheckout} disabled={cartItems.length === 0}>
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PosPage;