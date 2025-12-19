Hệ Thống Bán Hàng (POS)
Mô Tả Dự Án

Dự án này là một hệ thống bán hàng đơn giản (POS) bao gồm hai phần chính: màn hình bán hàng và màn hình hiển thị đơn hàng realtime. Các chức năng cơ bản bao gồm:

Hiển thị danh sách sản phẩm dưới dạng grid.

Thêm sản phẩm vào giỏ hàng và tính tổng tiền.

Thanh toán và cập nhật giỏ hàng.

Hiển thị đơn hàng realtime (tự động cập nhật không cần reload).

Gửi yêu cầu thanh toán lên Backend.

Công Nghệ Sử Dụng

Frontend: ReactJS (Function Component)

Backend: ASP.NET Core Web API

Database: In-memory hoặc một database đơn giản

Containerization: Docker
Yêu Cầu Chạy Dự Án
Frontend

Cài đặt Dependencies
Để cài đặt các thư viện và dependencies cho frontend, chúng ta cần chạy: npm install vào file node_modules bên trong frontend_react
Cài đặt các thư viện như 
react-router-dom: npm install react-router-dom
axios: npm install axios
react-dom: npm install react react-dom
devDependencies: npm install --save-dev vite
Lệnh chạy: npm run dev (cd đến src)
dự án sẽ chạy với http://localhost:5173

Backend

Cài Đặt Dependencies

Để cài đặt các dependencies cho backend, chúng ta cần cài đặt thông qua NuGet hoặc các công cụ quản lý package khác (ví dụ: Visual Studio, hoặc .NET CLI):
 Microsoft.EtityFramworkCore
 Microsoft.EntityFrameworkCore.SqlServer
 Microsoft.EntityFramworkCore.Tools

Docker

Dự án cũng đã được container hóa bằng Docker để dễ dàng triển khai và chạy.

Xây dựng Docker Image

Để xây dựng Docker image cho dự án, chạy lệnh sau trong thư mục chứa Dockerfile:

docker compose build
docker compose up

hoặc nếu đã chạy rồi thì sử dụng lệnh này trước hai lệnh trên
docker compose down

Sau đó, bạn có thể truy cập ứng dụng frontend tại http://localhost:3000 và backend tại http://localhost:5000.


Chi Tiết Chức Năng


Frontend (Màn Hình Bán Hàng)

Danh sách sản phẩm: Hiển thị danh sách sản phẩm với tên và giá.

Thêm sản phẩm vào giỏ hàng: Cho phép người dùng thêm sản phẩm vào giỏ hàng.

Hiển thị tổng tiền: Tổng tiền của tất cả sản phẩm trong giỏ hàng.

Thanh toán: Khi người dùng nhấn nút thanh toán, sẽ gửi yêu cầu thanh toán lên backend và hiển thị thông báo thanh toán thành công.



Frontend (Màn Hình Realtime)

Danh sách đơn hàng: Hiển thị danh sách đơn hàng đã thanh toán.

Cập nhật realtime: Màn hình đơn hàng tự động cập nhật mà không cần reload trang.

Thông tin đơn hàng: Mỗi đơn hàng sẽ hiển thị mã đơn hàng, tổng tiền và thời gian thanh toán.



Backend (API)

API lấy danh sách sản phẩm (GET /api/products):

Trả về danh sách sản phẩm gồm tên và giá.

API tạo đơn hàng (POST /api/orders):

Nhận dữ liệu đơn hàng và tạo mới đơn hàng.

API lấy danh sách đơn hàng (GET /api/orders):

Trả về danh sách tất cả các đơn hàng đã được tạo.

Dữ liệu sẽ được lưu trong một database Store_Manage.
Video Demo

