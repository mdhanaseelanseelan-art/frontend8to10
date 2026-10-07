-- ==========================================
-- SQL Day 8: INNER JOIN Queries
-- ==========================================

-- 1. Two-table INNER JOIN
SELECT 
    s.staff_id,
    s.full_name,
    s.salary,
    d.dept_name,
    d.location
FROM staff s
INNER JOIN departments d 
    ON s.dept_id = d.dept_id;

-- 2. Three-table INNER JOIN (Students, Enrollments, Courses)
SELECT 
    st.first_name,
    st.last_name,
    c.course_name,
    c.credits,
    e.enrollment_date,
    e.grade
FROM enrollments e
INNER JOIN students st ON e.student_id = st.student_id
INNER JOIN courses c ON e.course_id = c.course_id
WHERE e.grade = 'A';