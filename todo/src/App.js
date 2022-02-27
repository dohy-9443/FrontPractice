import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from './main/MainPage';
import SubPage from './subPage/SubPage';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/main" component={SubPage} />
    </Router>
  );
};

export default App;