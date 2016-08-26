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

    // this.editProperty = this.editProperty.bind(this);
    // this.updateName = this.updateName.bind(this);
    // this.updateValue = this.updateValue.bind(this);
  }

  // updateName(e) {
  //   let property = this.state.property;
  //   property.name = e.target.value;
  //   this.setState(property)
  // }
  // updateValue(e) {
  //   console.log(this.state.property)
  //   let property = this.state.property;
  //   property.value = e.target.value;
  //   this.setState(property)
  // }
  //
  // editProperty() {
  //   if (!this.state.editing) {
  //     this.setState({
  //       property: this.props.property,
  //       editing: !this.state.editing
  //     })
  //   } else {
  //     console.log(this.state.property)
  //     PropertiesActions.updateProperty(this.state.property)
  //     this.setState({
  //       property: {},
  //       editing: !this.state.editing
  //     })
  //   }
  // }
  // <button onClick={this.editProperty}>{this.state.editing ? 'Confirm' : 'Edit'}</button>
  // <button className="btn btn-danger" onClick={() => PropertyStore.deleteProperty(id)}>Delete</button>


  render() {
    let { id,name, value } = this.props.property

    let nameDisplay = this.state.editing ? <input onChange={this.updateName} defaultValue={name} /> : name
    let valueDisplay = this.state.editing ? <input onChange={this.updateValue} defaultValue={value} /> : value

    return (
      <tr className="text-center">
        <td className="col-xs-4 col-md-4 col-md-4 text-center">{nameDisplay}</td>
        <td className="col-xs-4 col-md-4 col-md-4 text-center">{valueDisplay}</td>
        <td className="col-xs-4 col-md-4 col-md-4">
          <button className="btn btn-danger" onClick={() => PropertiesActions.deleteProperty(name)}>Delete</button>
        </td>
      </tr>
    )
  }
}
