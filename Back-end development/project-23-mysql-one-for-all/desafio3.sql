CREATE VIEW historico_reproducao_usuarios AS
SELECT u.nome usuario, c.nome nome
FROM SpotifyClone.usuario u, SpotifyClone.historico_de_reproducoes h, SpotifyClone.cancao c
WHERE u.usuario_id = h.usuario_id AND h.cancao_id = c.cancao_id
ORDER BY usuario, nome;
