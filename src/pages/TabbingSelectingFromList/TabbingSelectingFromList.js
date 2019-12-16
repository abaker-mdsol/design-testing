import React from 'react';
import { Link } from 'react-router-dom';
import { CheckmatePlaceholder } from '../checkmatePlaceholder';
import PageHeader from '@mdsol/lego/lib/PageHeader';
import { Panel, Checkbox } from 'react-bootstrap';
import sampleTableData from './sampleTableData';

export class TabbingSelectingFromList extends React.Component {
  
  constructor() {
    super();
    this.state = {
      itemChecked: {},
    }
  }

  selectAll(e) {
    console.log('yo');
  }

  render() {
    return (
        <div className="">
          <CheckmatePlaceholder />
          <PageHeader heading="Tabbing and Selecting Items in a Table" breadcrumb={<Link to="/">back</Link>} />
          <div className="mcc-content">
            <Panel header={<h4>Legend</h4>}>
                Legend
            </Panel>
            <Panel header={<h3>Select</h3>}>
            <table className="table">
              <thead>
                <tr>
                  <th>
                    {/* <input type="checkbox" onChange={(e) => this.state.selectAll}></input> */}
                    <input type="checkbox"></input>
                  </th>
                  <th>Name</th>
                  <th>Uploaded By</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
              {
                sampleTableData.map(row => (
                  <tr>
                    <td>
                      <input type="checkbox"></input> 
                    </td>
                    <td>{row.name}</td>
                    <td>{row.uploadedBy}</td>
                    <td>{row.date}</td>
                  </tr>)
                )
              }
              </tbody>
              </table>  
            </Panel>
          </div>
        </div>
      );
  }   
}
