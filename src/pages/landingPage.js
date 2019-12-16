import React from 'react';
import { Link } from 'react-router-dom';
import '@mdsol/sandman/assets/platform.css';

export class LandingPage extends React.Component {
  
  render() {
    return (
        <div className="landing-page-wrap">
            <div><h1>Prototypes</h1></div>
            <ul>
              <Link to="/prototype-1">Prototype 1</Link>
              <li>Prototype 1</li>
              <li>Test site 2</li>
              <li>Test site 3</li>
            </ul>
        </div>
      );
  }   
}
