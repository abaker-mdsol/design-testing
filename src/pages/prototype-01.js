import React from 'react';
import { Link } from 'react-router-dom';
import { CheckmatePlaceholder } from './checkmatePlaceholder';

export class PrototypeOne extends React.Component {
  
  render() {
    return (
        <div className="">
          <CheckmatePlaceholder />
            <Link to="/">Return</Link>
            <div><h1>Prototype 1</h1></div>
            <ul>              
            </ul>
        </div>
      );
  }   
}
