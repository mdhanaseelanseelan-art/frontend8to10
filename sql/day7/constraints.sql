-- ==========================================
-- SQL Day 7: Table Constraints & Relationships
-- ==========================================

-- 1. Create Parent Table
CREATE TABLE departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(50) NOT NULL UNIQUE,
    location VARCHAR(100) DEFAULT 'Headquarters'
);

-- 2. Create Child Table with Foreign Key & Check Constraints
CREATE TABLE staff (
    staff_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    age INT CHECK (age >= 18 AND age <= 65),
    salary DECIMAL(10, 2) CHECK (salary > 0),
    dept_id INT,
    CONSTRAINT fk_staff_dept 
        FOREIGN KEY (dept_id) 
        REFERENCES departments(dept_id) 
        ON DELETE SET NULL
);

-- 3. Inserting valid linked data
INSERT INTO departments (dept_name) VALUES ('Tech'), ('Finance');
INSERT INTO staff (full_name, email, age, salary, dept_id)
VALUES ('Dhanaseelan M', 'dhanas@company.com', 24, 75000, 1);