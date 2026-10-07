-- ==========================================
-- SQL Day 5: Aggregate Functions & Calculations
-- ==========================================

-- 1. Total count of records
SELECT COUNT(*) AS total_employees FROM employees;

-- 2. Total payroll sum
SELECT SUM(salary) AS total_payroll FROM employees;

-- 3. Average salary rounded to 2 decimal places
SELECT ROUND(AVG(salary), 2) AS average_salary FROM employees;

-- 4. Minimum and Maximum salary
SELECT 
    MIN(salary) AS min_salary,
    MAX(salary) AS max_salary,
    MAX(salary) - MIN(salary) AS salary_spread
FROM employees;

-- 5. Count distinct values
SELECT COUNT(DISTINCT department) AS unique_departments 
FROM employees;