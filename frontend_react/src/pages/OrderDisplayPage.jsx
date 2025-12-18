import React, { useEffect, useState, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import OrderList from '../components/order/OrderList';
import Header from '../components/layout/Header';
import '../styles/order-display.css';

const OrderDisplayPage = () => {
  const [orders, setOrders] = useState([]);
  const connectionRef = useRef(null);

  

  return (
    <div>
      <Header />
      <div className="order-display-page">
        <h1>Danh sách đơn hàng</h1>
        <OrderList orders={orders} />
      </div>
    </div>
  );
};

export default OrderDisplayPage;
