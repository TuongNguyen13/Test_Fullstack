
import axios from "axios";
import OrderItem from "../components/order/OrderItem";
export const createOrder = async (cartItems, totalPrice) => {
  try {
    const API_URL = 'http://localhost:5000/api/Order/create-order';
    const orderPayload = {
      totalAmount: Math.round(totalPrice),
      orderTime : new Date().toISOString(),
      status: "Completed",
      createAt: new Date().toISOString(),
      OrderItems: cartItems.map(item => ({
        ProductId: item.productId,
        Quantity: item.quantity,
        UnitPrice: item.price,
        CreateAt : new Date().toISOString()
      }))
    };

    const response = await axios.post(API_URL, orderPayload);

    console.log("Tạo đơn hàng thành công:", response.data);
    return response.data;
  } catch (error) {
    console.error("Lỗi tạo đơn hàng:", error);
    throw error;
  }
};;

export const getOrders = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/Order/get-order', { withCredentials: true }); // API URL bạn muốn lấy dữ liệu từ
    if (!response.ok) {
      throw new Error("Lỗi khi lấy dữ liệu đơn hàng từ backend");
    }

    
    const orders = await response.json();
 

 

    return orders.message; // Trả về dữ liệu nhận được từ API

  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu đơn hàng:", error);
 
  }
};

