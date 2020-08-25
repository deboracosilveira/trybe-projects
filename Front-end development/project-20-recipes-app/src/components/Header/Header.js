import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import ProfileIcon from '../../images/profileIcon.svg';
import SearchIcon from '../../images/searchIcon.svg';
import { HeaderContainer } from './styles';

const Header = ({ pageTitle, ingredient }) => {
  const [displaySearchBar, setDisplaySearchBar] = useState(false);
  const title = pageTitle === 'Comidas' || pageTitle === 'Bebidas';

  useEffect(() => {
    if (ingredient) {
      setDisplaySearchBar(true);
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderContainer.DefaultHeader>
        <HeaderContainer.UserLink to="/perfil">
          <HeaderContainer.Img src={ProfileIcon} data-testid="profile-top-btn" alt="Profile icon" />
        </HeaderContainer.UserLink>
        <HeaderContainer.Title data-testid="page-title">{pageTitle}</HeaderContainer.Title>
        {title && (
          <HeaderContainer.SearchButton
            type="button"
            onClick={() => setDisplaySearchBar(!displaySearchBar)}
          >
            <HeaderContainer.Img src={SearchIcon} data-testid="search-top-btn" alt="Search icon" />
          </HeaderContainer.SearchButton>
        )}
      </HeaderContainer.DefaultHeader>
      {displaySearchBar && <SearchBar foodType={pageTitle} ingredient={ingredient} />}
    </HeaderContainer>
  );
};

export default Header;

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  ingredient: PropTypes.string.isRequired,
};
