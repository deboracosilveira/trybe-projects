CREATE VIEW top_2_hits_do_momento AS
SELECT c.nome cancao, COUNT(h.usuario_id) reproducoes
FROM SpotifyClone.cancao c
INNER JOIN SpotifyClone.historico_de_reproducoes h
ON c.cancao_id = h.cancao_id
GROUP BY cancao
ORDER BY reproducoes DESC, cancao
LIMIT 2;
