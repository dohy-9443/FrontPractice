import React from 'react';
import { Reset } from 'styled-reset'
import { BrowserRouter as Router, Route } from "react-router-dom";


import MainPage from './main/MainPage';
import SubPage from './subPage/SubPage';

const App = () => {

  return (
    <>
      <Reset />
      <Router>
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/sub" component={SubPage} />
      </Router>
    </>
    
  );
};

export default App;