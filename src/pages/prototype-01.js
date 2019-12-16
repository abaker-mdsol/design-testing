import React from 'react';
import { Link } from 'react-router-dom';
import { CheckmatePlaceholder } from './checkmatePlaceholder';
import PageHeader from '@mdsol/lego/lib/PageHeader';

export class PrototypeOne extends React.Component {
  
  render() {
    return (
        <div className="">
          <CheckmatePlaceholder />
          <PageHeader heading="somgd" />
            <Link to="/">Return</Link>
            <div><h1>Prototype 1</h1></div>
        </div>
      );
  }   
}
