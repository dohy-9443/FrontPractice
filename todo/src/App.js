import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from './main/MainPage';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
    </Router>
  );
};

export default App;