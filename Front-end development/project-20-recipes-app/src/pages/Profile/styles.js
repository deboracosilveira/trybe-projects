import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppContainer from '../../styledComponents/AppContainer/styles';
import Button from '../../styledComponents/Button/styles';

const ProfileContainer = styled(AppContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-direction: column;
`;

ProfileContainer.Email = styled.p`
  margin-top: 60px;
  font-size: 1.5rem;
`;

ProfileContainer.Links = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
  margin-top: 15px;
  align-items: center;

  @media (max-width: 800px) {
    margin-top: 10px;
    width: 95%;
  }
`;

ProfileContainer.Link = styled(Link)`
  width: 300px;
  padding: 10px;
  margin: 15px;
  font-size: 15px;
  word-wrap: break-word;

  @media (max-width: 800px) {
    width: 280px;
    padding: 8px;
    margin: 5px;
    font-size: 15px;
  }
`;

ProfileContainer.Button = styled(Button)``;

export default ProfileContainer;
