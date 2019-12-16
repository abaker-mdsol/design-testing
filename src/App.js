import React from 'react';
import './App.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages/landingPage';
import { PrototypeOne } from './pages/prototype-01';

function App() {
  return (
    <div className="page-directory">
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/prototype-1" component={PrototypeOne} />            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
