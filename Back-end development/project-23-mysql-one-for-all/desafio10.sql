DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico( usuario VARCHAR(100) )
RETURNS INT READS SQL DATA
BEGIN
DECLARE quantidade INT;
SELECT COUNT(cancao_id)
FROM SpotifyClone.historico_de_reproducoes
WHERE usuario_id = usuario
INTO quantidade;
RETURN quantidade;
END $$ DELIMITER ;
