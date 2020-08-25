import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FoodCardContainer = styled.div`
  width: 230px;
  text-align: center;
  margin: 15px;
  border-radius: 10px;
  position: relative;

  @media (max-width: 800px) {
    width: 280px;
  }
`;

FoodCardContainer.Img = styled.img`
  width: 230px;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  box-shadow: 10px 10px 10px 2px lightgray;

  @media (max-width: 800px) {
    width: 280px;
  }
`;

FoodCardContainer.Link = styled(Link)`
  text-decoration: none;
`;

FoodCardContainer.Name = styled.p`
  color: #294242;
  font-size: 1.8rem;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 36%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  border-radius: 10px;
  transition: opacity 0.4s;

  &:hover,
  &:focus {
    opacity: 0.75;
  }

  @media (max-width: 800px) {
    top: 38.5%;
  }
`;

export default FoodCardContainer;
