-- ==========================================
-- SQL Day 2: Data Manipulation Language (DML)
-- ==========================================

USE school_db;

-- 1. Insert single and multiple records
INSERT INTO students (first_name, last_name, email, phone_number)
VALUES 
('Dhanaseelan', 'M', 'dhanas@example.com', '9876543210'),
('Ananya', 'Ramesh', 'ananya@example.com', '9876543211'),
('Vignesh', 'Kumar', 'vignesh@example.com', '9876543212'),
('Sneha', 'Reddy', 'sneha@example.com', '9876543213');

-- 2. Update records conditionally
UPDATE students 
SET phone_number = '9998887770' 
WHERE first_name = 'Ananya';

-- 3. Delete specific records
DELETE FROM students 
WHERE student_id = 4;

-- 4. View updated table contents
SELECT * FROM students;