import React from 'react';
import { Link } from 'react-router-dom';
import '@mdsol/sandman/assets/platform.css';

export class LandingPage extends React.Component {
  
  render() {
    return (
        <div className="landing-page-wrap">
            <div><h1>Prototypes</h1></div>
            <ul>
              <Link to="/TabbingSelectingFromList">Tabbing and Selecting in Tables</Link>
              <li>..</li>
              <li>..</li>
              <li>...</li>
            </ul>
        </div>
      );
  }   
}
