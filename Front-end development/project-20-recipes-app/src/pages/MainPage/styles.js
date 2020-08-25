import styled from 'styled-components';
import AppContainer from '../../styledComponents/AppContainer/styles';
import Button from '../../styledComponents/Button/styles';

const MainPageContainer = styled(AppContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-direction: column;
`;

MainPageContainer.Categories = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;

  @media (max-width: 800px) {
    margin-top: 10px;
    width: 95%;
  }
`;

MainPageContainer.CategoryBtn = styled(Button)`
  width: 120px;
  padding: 10px;
  margin: 15px;
  font-size: 15px;
  word-wrap: break-word;

  @media (max-width: 800px) {
    width: 110px;
    padding: 8px;
    margin: 5px;
    font-size: 15px;
  }
`;

MainPageContainer.FoodContainer = styled.div`
  width: 95%;
  padding: 1% 5% 5% 5%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;
export default MainPageContainer;
