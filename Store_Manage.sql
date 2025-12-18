use master
create database Store_Manage
use Store_Manage
go

CREATE TABLE Products (
    ProductId VARCHAR(20) PRIMARY KEY,  -- Khoá chính, tự động tăng
    Name NVARCHAR(100) NOT NULL,              -- Tên sản phẩm
    Price DECIMAL(18, 2) NOT NULL,            -- Giá sản phẩm
    Description NVARCHAR(255),                -- Mô tả sản phẩm (tuỳ chọn)
    CreatedAt DATETIME DEFAULT GETDATE()      -- Thời gian tạo sản phẩm
);

CREATE TABLE Orders (
    OrderId VARCHAR(20) PRIMARY KEY,   -- Khoá chính, tự động tăng
    TotalAmount DECIMAL(18, 2) NOT NULL,      -- Tổng tiền của đơn hàng
    OrderTime DATETIME DEFAULT GETDATE(),    -- Thời gian thanh toán
    Status NVARCHAR(50) DEFAULT 'Pending',    -- Trạng thái đơn hàng (Pending, Completed, Canceled)
    CreatedAt DATETIME DEFAULT GETDATE()      -- Thời gian tạo đơn hàng
);

CREATE TABLE OrderItems (
    OrderItemId VARCHAR(20) PRIMARY KEY,    -- Khoá chính, tự động tăng
    OrderId VARCHAR(20),                                   -- Khoá ngoại đến bảng Orders
    ProductId VARCHAR(20),                                 -- Khoá ngoại đến bảng Products
    Quantity INT NOT NULL,                         -- Số lượng sản phẩm
    UnitPrice DECIMAL(18, 2) NOT NULL,             -- Giá của từng sản phẩm tại thời điểm mua
    TotalAmount AS (Quantity * UnitPrice) PERSISTED, -- Tính toán tổng tiền cho sản phẩm (số lượng * giá)
    CreatedAt DATETIME DEFAULT GETDATE(),          -- Thời gian tạo chi tiết đơn hàng
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId), -- Liên kết với bảng Orders
    FOREIGN KEY (ProductId) REFERENCES Products(ProductId) -- Liên kết với bảng Products
);

-- Thêm sản phẩm mẫu vào bảng Products
INSERT INTO Products (ProductId,Name, Price, Description)
VALUES
    ('sp001',N'Táo', 1.2, N'Táo đỏ sạch'),
    ('sp002',N'Chuối', 0.5, N'Chuối vàng sạch'),
    ('sp003',N'Cam', 1.0, N'Cam ngọt'),
    ('sp004',N'Đu đủ', 2.5, N'Đu đủ vàng'),
    ('sp005',N'Nho', 3.0, N'Nho sạch');

    INSERT INTO Products (ProductId,Name, Price, Description)
VALUES
    ('sp006',N'Xoài', 20000, N'Xoài thái sạch'),
    ('sp007',N'Nhãn', 30000, N'Nhãn xuồng ngọt'),
    ('sp008',N'Dưa hấu', 10000, N'Dưa hấu đỏ'),
    ('sp009',N'Cà chua', 25000, N'Cà chua chính'),
    ('sp010',N'Dưa leo', 27000, N'Dưa non');

    select * from Products

    update Products set Price = 50300 where ProductId = 'sp001'
    update Products set Price = 12500 where ProductId = 'sp002'
    update Products set Price = 4500 where ProductId = 'sp003'
    update Products set Price = 10700 where ProductId = 'sp004'
    update Products set Price = 40800 where ProductId = 'sp005'

