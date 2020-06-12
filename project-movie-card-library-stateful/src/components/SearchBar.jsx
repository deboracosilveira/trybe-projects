import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form>
        <label htmlFor="input">
          Inclui o texto:
          <input type="text" value={searchText} onChange={onSearchTextChange} />
        </label>
        <label htmlFor="checkbox">
          Mostrar somente favoritos
          <input type="checkbox" checked={bookmarkedOnly} onChange={onBookmarkedChange} />
        </label>
        <label htmlFor="genre">
          Filtrar por gênero
          <select value={selectedGenre} onChange={onSelectedGenreChange}>
            <option value="">Todos</option>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
      </form>
    );
  }
}
export default SearchBar;
