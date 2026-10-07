-- ==========================================
-- SQL Day 13: Stored Procedures & Triggers
-- ==========================================

DELIMITER //

-- 1. Create Stored Procedure for User Registration
CREATE PROCEDURE RegisterNewUser(
    IN p_username VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_role VARCHAR(20),
    OUT p_user_id INT
)
BEGIN
    INSERT INTO users (username, email, role, created_at)
    VALUES (p_username, p_email, p_role, NOW());
    
    SET p_user_id = LAST_INSERT_ID();
END //

-- 2. Create Audit Log Trigger on Salary Updates
CREATE TRIGGER trg_salary_update_audit
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    IF OLD.salary <> NEW.salary THEN
        INSERT INTO salary_audit_logs (emp_id, old_salary, new_salary, changed_at)
        VALUES (OLD.emp_id, OLD.salary, NEW.salary, NOW());
    END IF;
END //

DELIMITER ;