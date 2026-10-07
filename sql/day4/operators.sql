-- ==========================================
-- SQL Day 4: Logical Operators & Wildcards
-- ==========================================

-- 1. LIKE wildcard matching: starts with 'D'
SELECT * FROM students 
WHERE first_name LIKE 'D%';

-- 2. LIKE wildcard matching: ends with 'gmail.com'
SELECT * FROM students 
WHERE email LIKE '%@gmail.com';

-- 3. BETWEEN range operator
SELECT product_name, unit_price 
FROM products 
WHERE unit_price BETWEEN 50 AND 200;

-- 4. IN list operator
SELECT * FROM employees 
WHERE dept_id IN (10, 20, 40);

-- 5. IS NULL / IS NOT NULL
SELECT * FROM students 
WHERE phone_number IS NOT NULL;