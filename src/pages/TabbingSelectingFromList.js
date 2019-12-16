import React from 'react';
import { Link } from 'react-router-dom';
import { CheckmatePlaceholder } from './checkmatePlaceholder';
import PageHeader from '@mdsol/lego/lib/PageHeader';

export class TabbingSelectingFromList extends React.Component {
  
  render() {
    return (
        <div className="">
          <CheckmatePlaceholder />
          <PageHeader heading="Tabbing and Selecting Items in a Table" breadcrumb={<Link to="/">back</Link>} />

        </div>
      );
  }   
}
