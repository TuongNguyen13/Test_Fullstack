import React, { useState, useEffect,useRef } from 'react';
import ProductGrid from '../components/product/ProductGrid';
import Cart from '../components/cart/Cart';
import { useCart } from '../hooks/useCart';
import '../styles/pos.css';
import Header from '../components/layout/Header';
import OrderList from '../components/order/OrderList';
import { getOrders } from '../services/orderService';
import { HubConnectionBuilder } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';



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
   const intervalId = setInterval(fetchOrders, 3000);

    // Cleanup khi component unmount
    return () => clearInterval(intervalId);
  }, []); // Chỉ gọi 1 lần khi component mount



 useEffect(() => {
  if (connectionRef.current) return;

  const connection = new HubConnectionBuilder()
    .withUrl("https://localhost:44368/orderHub")
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Warning)
    .build();

  connection.on("ReceiveOrderUpdate", order => {
    console.log("Received order update:", order);
    setOrders(prev => Array.isArray(prev) ? [...prev, order] : [order]);
  });

  let isMounted = true;

  connection.start()
    .then(() => {
      if (!isMounted) return;
      console.log("✅ SignalR connected");
      connectionRef.current = connection;
    })
    .catch(err => console.error("SignalR error:", err));

  return () => {
    isMounted = false;
    if (connection.state === signalR.HubConnectionState.Connected) {
      connection.stop();
    }
    connectionRef.current = null;
  };
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