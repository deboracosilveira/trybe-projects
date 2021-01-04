SELECT p.ProductName `Produto`,
MIN(od.Quantity) `Mínima`,
MAX(od.Quantity) `Máxima`,
ROUND(AVG(od.Quantity), 2) `Média`
FROM w3schools.products p, w3schools.order_details od
WHERE p.ProductID = od.ProductID
GROUP BY `Produto`
HAVING `Média` > 20.00
ORDER BY `Média`, `Produto`;
