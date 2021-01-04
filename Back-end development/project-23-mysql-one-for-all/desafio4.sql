CREATE VIEW top_3_artistas AS
SELECT a.nome artista, COUNT(s.usuario_id) seguidores
FROM SpotifyClone.artista a
INNER JOIN SpotifyClone.artista_seguido s
ON a.artista_id = s.artista_id
GROUP BY artista
ORDER BY seguidores DESC, artista
LIMIT 3;
