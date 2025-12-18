export const getProducts = async () => {
  try {
    // Gọi API để lấy danh sách sản phẩm
    const API_URL = 'https://localhost:44368/api/Product/get-product';
    const response = await fetch(API_URL);
    
    // Kiểm tra nếu API không trả về OK (200 OK)
    if (!response.ok) {
      throw new Error(`Lỗi khi lấy dữ liệu: ${response.statusText}`);
    }

    // Chuyển dữ liệu từ JSON
    const data = await response.json();

    // Kiểm tra nếu dữ liệu trả về có trường "message"
    if (data && data.message) {
      return data.message;  // Trả về mảng sản phẩm từ dữ liệu API
    } else {
      throw new Error("Dữ liệu trả về không đúng định dạng");
    }
  } catch (error) {
    console.error('Có lỗi xảy ra:', error);
    throw error;  // Đảm bảo rằng lỗi được ném ra để có thể xử lý tiếp nếu cần
  }



  //   return [
  //   { id: 1, name: 'Sản phẩm 1', price: 100000, imageUrl: '/assets/logo.png' },
  //   { id: 2, name: 'Sản phẩm 2', price: 200000, imageUrl: '/assets/logo.png' }
  // ];
};
