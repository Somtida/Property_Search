import React, { Component } from 'react'
import Property from './Property';

export default class PropertiesDisplay extends Component {
  constructor(props){
    super(props);

  }

  render() {
    let { properties } = this.props
    let display = properties.length && properties.map(property => <Property key={property.id} property={property} />);

    return (
      <table className="table">
        <thead>
          <tr className="text-center">
            <th className="col-xs-4 col-md-4 col-md-4 text-center">Name</th>
            <th className="col-xs-4 col-md-4 col-md-4 text-center">Value</th>
            <th className="col-xs-4 col-md-4 col-md-4 text-center">Delete</th>
          </tr>
        </thead>
        <tbody className="text-left">
          {display || 'No Property To Display'}
        </tbody>
      </table>
    )
  }
}
