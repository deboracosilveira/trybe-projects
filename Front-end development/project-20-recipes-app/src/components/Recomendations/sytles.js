import styled from 'styled-components';

const RecContainer = styled.div`
  width: 100%;
  height: fit-content;
  overflow: scroll;
  display: flex;
`;

RecContainer.RecCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 2%;
`;

RecContainer.RecImg = styled.img`
  width: 18vw;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  box-shadow: 10px 10px 10px 2px lightgray;

  @media (max-width: 800px) {
    width: 30vw;
  }
`;

RecContainer.Name = styled.p`
  color: #294242;
  font-size: 1.8rem;
  background-color: white;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 37.5%;
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
    display: none;
  }
`;

export default RecContainer;
