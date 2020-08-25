import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppContainer from '../../styledComponents/AppContainer/styles';
import H1 from '../../styledComponents/H1/styles';
import Input from '../../styledComponents/Input/styles';
import Button from '../../styledComponents/Button/styles';
import CoverPic from '../../images/cover-pic.jpg';

const LoginContainer = styled(AppContainer)`
  background-image: url(${CoverPic});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

LoginContainer.Aside = styled.aside`
  background-color: rgb(255,255,255, 0.6);
  width: 35vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 3%;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 800px) {
    background-color: rgb(255,255,255, 0.9);
    left: 0;
    width: 80vw;
    height: 70vh;
    padding: 5%;
  }
`;

LoginContainer.H1 = styled(H1)``;

LoginContainer.Input = styled(Input)`
`;

LoginContainer.Link = styled(Link)`
  width: 60%;
`;

LoginContainer.Button = styled(Button)`
  &:disabled {
    cursor: default;
    opacity: 0.4;
    transition: opacity 0.5s;
  }
`;

export default LoginContainer;
