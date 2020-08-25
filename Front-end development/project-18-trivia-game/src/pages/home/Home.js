import React from 'react';
import { Login } from '../../components';
import Logo from '../../images/trivia.png';
import './Home.css';

const Home = () => (
  <div>
    <img className="logo" src={Logo} alt="logo" />
    <Login />
  </div>
);

export default Home;
