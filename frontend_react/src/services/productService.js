export const getProducts = async () => {
  try {
    
    const API_URL = 'http://localhost:5000/api/Product/get-product';
    const response = await fetch(API_URL);
    
  
    if (!response.ok) {
      throw new Error(`Lỗi khi lấy dữ liệu: ${response.statusText}`);
    }


    const data = await response.json();

    
    if (data && data.message) {
      return data.message; 
    } else {
      throw new Error("Dữ liệu trả về không đúng định dạng");
    }
  } catch (error) {
    console.error('Có lỗi xảy ra:', error);
    throw error;  
  }




};
