import React from 'react';
import { Link } from 'react-router-dom';

export class PrototypeOne extends React.Component {
  
  render() {
    return (
        <div className="">
            <Link to="/">Return</Link>
                <div><h1>Prototype 1</h1></div>
            <ul>              
            </ul>
        </div>
      );
  }   
}
