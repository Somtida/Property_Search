import React, { Component } from 'react'

import PropertiesActions from '../actions/PropertiesActions'
import PropertyStore from '../stores/PropertyStore'


export default class Property extends Component {
  constructor(props){
    super(props);

    this.state = {
      editing: false,
      property: {},
    }


  }


  render() {
    let { id,name, key, value } = this.props.property

    let nameDisplay = this.state.editing ? <input onChange={this.updateName} defaultValue={name} /> : name
    let valueDisplay = this.state.editing ? <input onChange={this.updateValue} defaultValue={value} /> : value

    return (
      <tr className="text-center">
        <td className="col-xs-4 col-md-4 col-md-4 text-center">{nameDisplay}</td>
        <td className="col-xs-4 col-md-4 col-md-4 text-center">{valueDisplay}</td>
        <td className="col-xs-4 col-md-4 col-md-4">
          <button className="btn btn-danger glyphicon glyphicon-trash" onClick={() => PropertiesActions.deleteProperty(name,key)}>  Delete</button>
        </td>
      </tr>
    )
  }
}
