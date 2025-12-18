import React from 'react';
import '../../styles/order.css';

const OrderItem = ({ order }) => {
  return (
    <tr>
      <td>{order.orderId}</td>
      <td>{(order.totalAmount).toLocaleString("VN-vi",{
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })}</td>
      <td>{new Date(order.orderTime).toLocaleString('vi-VN')}</td>
    </tr>
  );
};

export default OrderItem;
