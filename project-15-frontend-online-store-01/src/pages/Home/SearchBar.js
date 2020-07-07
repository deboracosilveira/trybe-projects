import React from 'react';

class SearchBar extends React.Component {
  render() {
    const { changeHandle, inputValue, getProducts } = this.props;

    return (
      <div>
        <input
          value={inputValue}
          data-testid="query-input"
          onChange={changeHandle}
        />
        <button type="button" data-testid="query-button" onClick={getProducts}>
          PESQUISAR
        </button>
      </div>
    );
  }
}

export default SearchBar;
