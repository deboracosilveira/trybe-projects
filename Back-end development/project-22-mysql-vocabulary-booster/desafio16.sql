USE hr;
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE total_empregos INT;
SELECT COUNT(jh.employee_id)
FROM hr.employees e, hr.job_history jh
WHERE e.employee_id = jh.employee_id and e.email = email
INTO total_empregos;
RETURN total_empregos;
END $$ DELIMITER ;

SELECT buscar_quantidade_de_empregos_por_funcionario('NKOCHHAR');
