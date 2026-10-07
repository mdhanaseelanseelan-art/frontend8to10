-- ==========================================
-- SQL Day 12: Transactions & ACID Control
-- ==========================================

-- Bank transfer example
START TRANSACTION;

-- Step 1: Debit Account A
UPDATE accounts 
SET balance = balance - 500.00 
WHERE account_id = 101 AND balance >= 500.00;

-- Step 2: Set Savepoint
SAVEPOINT debit_done;

-- Step 3: Credit Account B
UPDATE accounts 
SET balance = balance + 500.00 
WHERE account_id = 202;

-- Step 4: Commit if everything succeeded
COMMIT;

-- In case of error:
-- ROLLBACK TO debit_done;
-- or
-- ROLLBACK;