import React from 'react';
import './App.scss';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from './pages/landingPage';
import { TabbingSelectingFromList } from './pages/TabbingSelectingFromList/TabbingSelectingFromList';

function App() {
  return (
    <div className="page-directory">
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/TabbingSelectingFromList" component={TabbingSelectingFromList} />            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
