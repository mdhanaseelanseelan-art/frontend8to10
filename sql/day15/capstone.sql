-- ==========================================
-- SQL Day 15: Capstone Production Database
-- ==========================================

-- 1. Initialize Capstone Database
CREATE DATABASE IF NOT EXISTS techhub_production;
USE techhub_production;

-- 2. Create Schema
CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role ENUM('Admin', 'Developer', 'Student') DEFAULT 'Student',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
    project_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL,
    budget DECIMAL(12, 2) DEFAULT 0.00
);

CREATE TABLE assignments (
    assignment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    project_id INT,
    hours_logged DECIMAL(6, 2) DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (project_id) REFERENCES projects(project_id) ON DELETE CASCADE
);

-- 3. Complex Reporting Query: Developer Project Allocation & Total Hours
SELECT 
    u.name AS developer_name,
    u.role,
    COUNT(DISTINCT a.project_id) AS assigned_projects_count,
    COALESCE(SUM(a.hours_logged), 0) AS total_hours_worked,
    COALESCE(SUM(p.budget), 0) AS total_project_budget_handled
FROM users u
LEFT JOIN assignments a ON u.user_id = a.user_id
LEFT JOIN projects p ON a.project_id = p.project_id
GROUP BY u.user_id, u.name, u.role
ORDER BY total_hours_worked DESC;