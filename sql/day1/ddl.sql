-- ==========================================
-- SQL Day 1: Data Definition Language (DDL)
-- ==========================================

-- 1. Create a new database
CREATE DATABASE IF NOT EXISTS school_db;
USE school_db;

-- 2. Create Students table
CREATE TABLE IF NOT EXISTS students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    enrollment_date DATE DEFAULT (CURRENT_DATE)
);

-- 3. Create Courses table
CREATE TABLE IF NOT EXISTS courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    course_name VARCHAR(100) NOT NULL,
    credits INT DEFAULT 3,
    department VARCHAR(50)
);

-- 4. Alter table: Add new column
ALTER TABLE students 
ADD COLUMN phone_number VARCHAR(15);

-- 5. Alter table: Modify column data type
ALTER TABLE students 
MODIFY COLUMN email VARCHAR(120);

-- 6. Show table schema
DESCRIBE students;
DESCRIBE courses;