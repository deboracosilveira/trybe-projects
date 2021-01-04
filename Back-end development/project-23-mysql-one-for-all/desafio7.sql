CREATE VIEW perfil_artistas AS
SELECT
  (
    SELECT
      nome
    FROM
      SpotifyClone.artista
    WHERE
      artista.artista_id = album.artista_id
  ) artista,
  nome album,
  (
    SELECT
      COUNT(usuario_id)
    FROM
      SpotifyClone.artista_seguido
    WHERE
      artista_seguido.artista_id = album.artista_id
  ) seguidores
FROM
  SpotifyClone.album
ORDER BY
  seguidores DESC,
  artista,
  album;
