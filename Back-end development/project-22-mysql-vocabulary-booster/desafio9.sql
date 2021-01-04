SELECT CONCAT(e.FirstName, ' ', e.LastName) `Nome completo`,
COUNT(e.EmployeeID) `Total de pedidos`
FROM w3schools.employees e
INNER JOIN w3schools.orders o ON e.EmployeeID = o.EmployeeID
GROUP BY e.EmployeeID
ORDER BY `Total de pedidos`;
