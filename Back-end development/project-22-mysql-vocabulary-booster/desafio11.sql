SELECT a.ContactName Nome,
a.Country País,
COUNT(a.ContactName) `Número de compatriotas`
FROM w3schools.customers a, w3schools.customers b
WHERE a.Country = b.Country AND a.ContactName <> b.ContactName 
GROUP BY a.CustomerID
ORDER BY Nome;
