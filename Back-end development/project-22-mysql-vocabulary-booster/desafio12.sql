SELECT 
CONCAT(a.first_name, ' ', a.last_name) `Nome completo funcionário 1`,
a.salary `Salário funcionário 1`,
a.phone_number `Telefone funcionário 1`,
CONCAT(b.first_name, ' ', b.last_name) `Nome completo funcionário 2`,
b.salary `Salário funcionário 2`,
b.phone_number `Telefone funcionário 2`
FROM hr.employees a, hr.employees b
WHERE a.JOB_ID = b.JOB_ID AND a.EMPLOYEE_ID <> b.EMPLOYEE_ID
ORDER BY `Nome completo funcionário 1` , `Nome completo funcionário 2`;
