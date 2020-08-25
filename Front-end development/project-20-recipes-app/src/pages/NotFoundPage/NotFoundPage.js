import React from 'react';
import { Header, BottomMenu } from '../../components';
import NotFoundPageContainer from './styles';

const NotFoundPage = () => (
  <NotFoundPageContainer>
    <Header pageTitle="" />
    <h1>Página não encontrada</h1>
    <BottomMenu />
  </NotFoundPageContainer>
);

export default NotFoundPage;
