-- ==========================================
-- SQL Day 3: SELECT Projections & Filtering
-- ==========================================

-- 1. Select all columns
SELECT * FROM employees;

-- 2. Select specific columns with aliases
SELECT 
    emp_id AS "Employee ID",
    CONCAT(first_name, ' ', last_name) AS "Full Name",
    salary AS "Monthly Salary"
FROM employees;

-- 3. Filter with WHERE clause
SELECT * FROM employees 
WHERE salary >= 70000;

-- 4. Sorting with ORDER BY (Descending)
SELECT first_name, salary 
FROM employees 
ORDER BY salary DESC;

-- 5. Limit and Pagination
SELECT first_name, salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 3 OFFSET 0;