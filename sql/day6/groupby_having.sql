-- ==========================================
-- SQL Day 6: GROUP BY & HAVING Clauses
-- ==========================================

-- 1. Count employees per department
SELECT 
    department, 
    COUNT(*) AS employee_count,
    ROUND(AVG(salary), 2) AS avg_salary
FROM employees 
GROUP BY department;

-- 2. Filter groups using HAVING (avg salary > 65000)
SELECT 
    department, 
    COUNT(*) AS employee_count,
    AVG(salary) AS avg_salary 
FROM employees 
GROUP BY department 
HAVING AVG(salary) > 65000;

-- 3. Multi-column grouping
SELECT 
    department, 
    job_title, 
    COUNT(*) AS total_count,
    SUM(salary) AS total_cost
FROM employees 
GROUP BY department, job_title 
ORDER BY department, total_cost DESC;