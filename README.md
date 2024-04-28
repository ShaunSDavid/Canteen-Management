Simple Canteen Management App using SpringBoot and React

For Database in Mysql in Apache XAMPP use the following queries for the database
CREATE TABLE orders (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Itemname VARCHAR(255),
    Itemimage VARCHAR(255),
    Itemdesc TEXT,
    Price DECIMAL(10, 2)
);

CREATE TABLE admin (
    OrderId INT AUTO_INCREMENT PRIMARY KEY,
    Time VARCHAR(50),
    Price INT(20)
    Status VARCHAR(100),
);
