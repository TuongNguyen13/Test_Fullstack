use master
create database Store_Manage
use Store_Manage
go

CREATE TABLE Products (
    ProductId VARCHAR(20) PRIMARY KEY,  
    Name NVARCHAR(100) NOT NULL,              
    Price DECIMAL(18, 2) NOT NULL,           
    Description NVARCHAR(255),               
    CreatedAt DATETIME DEFAULT GETDATE()     
);

CREATE TABLE Orders (
    OrderId VARCHAR(20) PRIMARY KEY,   
    TotalAmount DECIMAL(18, 2) NOT NULL,      
    OrderTime DATETIME DEFAULT GETDATE(),    
    Status NVARCHAR(50) DEFAULT 'Pending',  --- (Pending, Completed)
    CreatedAt DATETIME DEFAULT GETDATE()     
);

CREATE TABLE OrderItems (
    OrderItemId VARCHAR(20) PRIMARY KEY,    
    OrderId VARCHAR(20),                                   
    ProductId VARCHAR(20),                                
    Quantity INT NOT NULL,                        
    UnitPrice DECIMAL(18, 2) NOT NULL,            
    TotalAmount AS (Quantity * UnitPrice) PERSISTED, 
    CreatedAt DATETIME DEFAULT GETDATE(),         
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId), 
    FOREIGN KEY (ProductId) REFERENCES Products(ProductId) 
);


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

