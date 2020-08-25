import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppContainer from '../../styledComponents/AppContainer/styles';
import Button from '../../styledComponents/Button/styles';

const RecipeDetailsContainer = styled(AppContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

RecipeDetailsContainer.Cover = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  text-align: center;
  z-index: 1;
  
  @media (max-width: 500px) {
    width: 100%;
    position: absolute;
    top: -5%;
    left: 0;
    z-index: 0;
  }
  `;

RecipeDetailsContainer.Img = styled.img`
  border-radius: 50%;
  width: 30vw;
  box-shadow: 10px 10px 10px 2px lightgray;

  @media (max-width: 500px) {
    width: 100%;
    border-radius: 0;
  }
`;

RecipeDetailsContainer.Info = styled.div`
  background-color: white;
  border-radius: 40px 40px 0 0;
  padding: 5%;
  z-index: 0;
  position: absolute;
  top: 0;
  width: 80%;
  background-color: var(--greenLight);

  @media (max-width: 500px) {
    position: absolute;
    top: 280px;
    z-index: 1;
    width: 100%;
    background-color: white;
  }
`;

RecipeDetailsContainer.Btn = styled(Button)`
  width: 35%;
  padding: 5px;
  margin-top: 10px;
`;

export default RecipeDetailsContainer;
