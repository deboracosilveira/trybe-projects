import React from 'react';
import './App.css';

import Routes from './Routes';
import ContextProvider from './context/Context';

function App() {
  return (
    <div id="meals">
      <ContextProvider>
        <Routes />
      </ContextProvider>
    </div>
  );
}

export default App;
