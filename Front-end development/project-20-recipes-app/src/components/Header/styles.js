import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../styledComponents/Input/styles';
import Button from '../../styledComponents/Button/styles';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

HeaderContainer.DefaultHeader = styled.div`
  align-items: center;
  background-color: var(--greenLight);
  display: flex;
  height: 10vh;
  justify-content: space-around;
  padding: 10px 30px;
  border-radius: 0 0 30px 30px;
  width: 100%;
`;

HeaderContainer.UserLink = styled(Link)`
  border: 0;
  cursor: pointer;
`;

HeaderContainer.Img = styled.img``;

HeaderContainer.Title = styled.h1`
  letter-spacing: 5px;
  font-weight: 300;
  margin: 0;

  @media (max-width: 800px) {
    font-size: 1.3rem;
  }
`;

HeaderContainer.SearchButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  height: 90%;
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid var(--primary);
  border-top-color: white;
  border-radius: 0 0 30px 30px;
  width: 85vw;
`;

SearchBarContainer.Input = styled(Input)`
  width: 70%;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

SearchBarContainer.Radios = styled.div`
  display: flex;
  margin: 2%;
  justify-content: space-around;
  width: 50%;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 75%;
  }
`;

SearchBarContainer.RadioLabel = styled.label`
  font-size: 1.2em;

  @media (max-width: 800px) {
    font-size: 1.4em;
    margin-bottom: 5%;
  }
`;

SearchBarContainer.Button = styled(Button)`
  width: 20%;
  padding: 5px;
  margin-bottom: 15px;

  @media (max-width: 800px) {
    width: 40%;
  }
`;

export { HeaderContainer, SearchBarContainer };
