
import axios from "axios";
import OrderItem from "../components/order/OrderItem";
export const createOrder = async (cartItems, totalPrice) => {
  try {
    const API_URL = 'https://localhost:44368/api/Order/create-order';
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
    const response = await fetch('https://localhost:44368/api/Order/get-order', { withCredentials: true }); // API URL bạn muốn lấy dữ liệu từ
    if (!response.ok) {
      throw new Error("Lỗi khi lấy dữ liệu đơn hàng từ backend");
    }

    // Giả sử response trả về danh sách đơn hàng từ API
    const orders = await response.json();
    console.log(orders);

    // Nếu không có dữ liệu, trả về dữ liệu mẫu
    // if (orders.length === 0) {
    //   return [
    //     { orderId: "HD001", totalAmount: 300000, orderTime: 1765965000000 },
    //     { orderId: "HD002", totalAmount: 500000, orderTime: 1765961000000 }
    //   ];
    // }

    return orders.message; // Trả về dữ liệu nhận được từ API

  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu đơn hàng:", error);
    // Trả về dữ liệu mẫu trong trường hợp có lỗi
    // return [
    //   { orderId: "HD001", totalAmount: 300000, orderTime: 1765965000000 },
    //   { orderId: "HD002", totalAmount: 500000, orderTime: 1765961000000 }
    // ];
  }
};

