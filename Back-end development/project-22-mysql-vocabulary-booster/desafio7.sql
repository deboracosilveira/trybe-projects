SELECT UCASE(CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME)) `Nome completo`,
h.START_DATE `Data de início`,
e.SALARY `Salário`
FROM hr.job_history h
INNER JOIN hr.employees e
ON h.EMPLOYEE_ID = e.EMPLOYEE_ID
WHERE MONTH(h.START_DATE) IN (01, 02, 03)
ORDER BY `Nome completo`, `Data de início`;
