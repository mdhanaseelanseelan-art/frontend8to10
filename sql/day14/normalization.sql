-- ==========================================
-- SQL Day 14: Normalization (1NF, 2NF, 3NF)
-- ==========================================

-- UNNORMALIZED TABLE (Redundant & Multi-valued):
-- Orders(order_id, customer_name, customer_city, items, total)

-- 1NF: Atomic columns, unique rows
-- 2NF: Remove Partial Functional Dependencies
-- 3NF: Remove Transitive Dependencies (City depends on Zip/Customer, not Order)

-- Normalized 3NF Schema:
CREATE TABLE customers_3nf (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    city VARCHAR(50)
);

CREATE TABLE products_3nf (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    unit_price DECIMAL(8, 2) NOT NULL
);

CREATE TABLE orders_3nf (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES customers_3nf(customer_id)
);

CREATE TABLE order_details_3nf (
    order_id INT,
    product_id INT,
    quantity INT CHECK (quantity > 0),
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders_3nf(order_id),
    FOREIGN KEY (product_id) REFERENCES products_3nf(product_id)
);