-- ==========================================
-- SQL Day 10: Subqueries & Nested Queries
-- ==========================================

-- 1. Single-row subquery in WHERE clause
SELECT first_name, salary 
FROM employees 
WHERE salary > (SELECT AVG(salary) FROM employees);

-- 2. Multi-row subquery with IN
SELECT product_name, unit_price 
FROM products 
WHERE category_id IN (
    SELECT category_id FROM categories WHERE is_active = 1
);

-- 3. Correlated Subquery (Employees earning above their dept avg)
SELECT e.first_name, e.department, e.salary 
FROM employees e 
WHERE e.salary > (
    SELECT AVG(salary) 
    FROM employees 
    WHERE department = e.department
);

-- 4. Subquery with EXISTS
SELECT c.customer_name 
FROM customers c 
WHERE EXISTS (
    SELECT 1 FROM orders o 
    WHERE o.customer_id = c.customer_id AND o.total_amount > 500
);