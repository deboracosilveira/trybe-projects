USE hr;
DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo(IN cargo VARCHAR(300))
BEGIN
SELECT ROUND(AVG(e.salary), 2) `Média salarial`
FROM hr.jobs j, hr.employees e
WHERE j.job_id = e.job_id AND j.job_title = cargo;
END $$ DELIMITER ;

CALL buscar_media_por_cargo('Programmer');
