SELECT JOB_TITLE Cargo, max_salary-min_salary
"Diferença entre salários máximo e mínimo"
FROM hr.jobs
ORDER BY max_salary-min_salary, Cargo;
