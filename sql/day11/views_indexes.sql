-- ==========================================
-- SQL Day 11: Views & Performance Indexes
-- ==========================================

-- 1. Create a View for Top Earners
CREATE OR REPLACE VIEW high_earners_view AS 
SELECT 
    emp_id, 
    first_name, 
    last_name, 
    department, 
    salary 
FROM employees 
WHERE salary >= 80000;

-- 2. Querying the view just like a regular table
SELECT * FROM high_earners_view WHERE department = 'Engineering';

-- 3. Create Index on email for ultra-fast lookups
CREATE INDEX idx_emp_email ON employees(email);

-- 4. Create Composite Index on Department and Salary
CREATE INDEX idx_dept_salary ON employees(department, salary);

-- 5. Inspect Query Execution Plan
EXPLAIN SELECT * FROM employees WHERE department = 'Sales' AND salary > 50000;