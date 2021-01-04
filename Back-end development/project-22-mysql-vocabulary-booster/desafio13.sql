SELECT 
p.ProductName `Produto`, p.Price `Preço`
FROM
w3schools.products p,
w3schools.order_details od
WHERE od.ProductID = p.ProductID AND od.Quantity > 80
ORDER BY `Produto`;
