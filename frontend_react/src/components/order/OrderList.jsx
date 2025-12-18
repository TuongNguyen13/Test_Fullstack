import React from "react";
import OrderItem from "./OrderItem";
import "../../styles/order.css";

const OrderList = ({ orders = [] }) => { 
  if(!Array.isArray(orders)|| orders.length === 0) {
     return <p>Chưa có đơn hàng nào</p>;
  }
  return (
    <div className="order-list">
     <div className="order-table-wrapper">
        <table className="order-table">
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Tổng tiền</th>
              <th>Thời gian</th>
            </tr>
          </thead>

        <tbody>
          {orders.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ textAlign: "center" }}>
                Chưa có đơn hàng nào
              </td>
            </tr>
          ) : (
            orders.map((order) => (
              <OrderItem key={order.orderId} order={order} />
            ))
          )}
        </tbody>
      </table>
    </div>
    </div>

  );
};

export default OrderList;
