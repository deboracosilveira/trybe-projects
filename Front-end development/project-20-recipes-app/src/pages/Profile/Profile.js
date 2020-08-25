import React from 'react';
import { Header, BottomMenu } from '../../components';
import ProfileContainer from './styles';

const Profile = () => {
  const user = JSON.parse(localStorage.user);

  return (
    <ProfileContainer>
      <Header pageTitle="Perfil" />
      <ProfileContainer.Email data-testid="profile-email">{user.email}</ProfileContainer.Email>
      <ProfileContainer.Links>
        <ProfileContainer.Link to="/receitas-feitas">
          <ProfileContainer.Button type="button" data-testid="profile-done-btn">
            Receitas Feitas
          </ProfileContainer.Button>
        </ProfileContainer.Link>
        <ProfileContainer.Link to="/receitas-favoritas">
          <ProfileContainer.Button type="button" data-testid="profile-favorite-btn">
            Receitas Favoritas
          </ProfileContainer.Button>
        </ProfileContainer.Link>
        <ProfileContainer.Link to="/">
          <ProfileContainer.Button
            type="button"
            data-testid="profile-logout-btn"
            onClick={() => window.localStorage.clear()}
          >
            Sair
          </ProfileContainer.Button>
        </ProfileContainer.Link>
      </ProfileContainer.Links>
      <BottomMenu />
    </ProfileContainer>
  );
};

export default Profile;
