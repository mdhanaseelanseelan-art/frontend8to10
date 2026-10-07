-- ==========================================
-- SQL Day 9: LEFT, RIGHT & FULL OUTER JOINS
-- ==========================================

-- 1. LEFT JOIN: All customers including those without orders
SELECT 
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.total_amount
FROM customers c
LEFT JOIN orders o 
    ON c.customer_id = o.customer_id;

-- 2. Find customers who have NEVER placed an order
SELECT 
    c.customer_id,
    c.customer_name,
    c.email
FROM customers c
LEFT JOIN orders o 
    ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;

-- 3. SELF JOIN: Employees and their Managers
SELECT 
    e.first_name AS employee_name,
    m.first_name AS manager_name
FROM employees e
LEFT JOIN employees m 
    ON e.manager_id = m.emp_id;